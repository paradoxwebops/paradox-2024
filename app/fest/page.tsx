"use client"
import { LoginButton, RegistrationForm } from "@/components";
import { useSelector } from "@/store";


export default function FestRegisterationPage() {
  const {access_token} = useSelector(s => s.auth)
  
  if (!!!access_token) {
    return (
      <>
      <div className="flex justify-center align-center h-full">
        <div className="text-center">
          <h2 className="text-2xl mb-6">Please login first.</h2>
          <LoginButton />
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <RegistrationForm />
    </>
  );
}
