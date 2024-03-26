"use client"

import { GoogleOAuthProvider as Provider } from "@react-oauth/google"
import { useToast } from "@/contexts";
import { GOOGLE_CLIENT_ID } from '@/lib/constants'

const GoogleOAuthProvider = ({children}: {children:React.ReactNode}) => {
    const { toast } = useToast()
    
    return (
        <Provider 
            onScriptLoadError={() =>
                toast({
                    title: "Google API error",
                    description: "Send a mail to webops@iitmparadox.org",
                    variant: "destructive",
                })
            }

            clientId={GOOGLE_CLIENT_ID ?? ''}
        >
            {children}
        </Provider>
    )
}

export {
    GoogleOAuthProvider,
}