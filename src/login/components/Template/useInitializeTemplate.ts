/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/useInitializeTemplate.ts"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { useInsertScriptTags } from "@keycloakify/login-ui/tools/useInsertScriptTags";
import { useEffect } from "react";
import { useKcContext } from "../../KcContext";
import { useAuthChecker } from "./useAuthChecker";

export function useInitializeTemplate() {
    const { kcContext } = useKcContext();

    useAuthChecker();

    const { insertScriptTags } = useInsertScriptTags({
        effectId: "Template",
        scriptTags: [
            ...(kcContext.scripts === undefined
                ? []
                : kcContext.scripts.map(src => ({
                      type: "text/javascript" as const,
                      src
                  })))
        ]
    });

    useEffect(() => {
        insertScriptTags();
    }, []);
}
