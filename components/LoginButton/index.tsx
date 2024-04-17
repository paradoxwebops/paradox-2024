import { GoogleCredentialResponse, GoogleLogin } from "@react-oauth/google";
import { DJANGO_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/lib/constants";
import { loginUser } from "@/lib/methods";
import { useToast, useAxios } from "@/contexts";
import { useDispatch } from "@/store";
import { setAuth } from "@/store/actions";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { AuthStateModel } from "@/lib/interfaces";

const convertTokenPayload = ({ credential }: GoogleCredentialResponse) => ({
  backend: "google-identity",
  token: credential,
  grant_type: "convert_token",
  client_id: DJANGO_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
});

interface JWTProps extends JwtPayload {
  picture: string;
}
const LoginButton = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { axios } = useAxios();

  return (
    <>
      <GoogleLogin
        onSuccess={(credential) => {
          loginUser(axios, convertTokenPayload(credential)).then((res) => {
            const { user, access_token, refresh_token } = res;
            const cred = jwtDecode(credential.credential ?? "") as JWTProps;
            user.picture = cred.picture;
            const payload: AuthStateModel = {
              access_token,
              refresh_token,
              user,
            };

            dispatch(setAuth(payload));
          });
        }}
        onError={() => {
          toast({
            title: "Something went wrong",
            description: "Please contact webops@paradox",
            variant: "destructive",
          });
        }}
        text="signin"
        shape="circle"
        itp_support={true}
        auto_select
      />
    </>
  );
};

export { LoginButton };
