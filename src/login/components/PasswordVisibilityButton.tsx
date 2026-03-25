/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/PasswordVisibilityButton.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { Button } from '@/components/ui/button';
import { useI18n } from "@/login/i18n";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";


export function PasswordVisibilityButton(props: {
    passwordInputId: string;
    tabIndex?: number;
}) {
    const { passwordInputId, tabIndex } = props;

    const { msgStr } = useI18n();

    const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({
        passwordInputId
    });

    return (
        <Button
            type="button"
            tabIndex={tabIndex}
            variant="ghost"
            size="icon-sm"
            aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
            aria-controls={passwordInputId}
            onClick={toggleIsPasswordRevealed}
        >
            {isPasswordRevealed ? <HugeiconsIcon icon={ViewOffSlashIcon} size={18} /> : <HugeiconsIcon icon={ViewIcon} size={18} />}
        </Button>
    );
}