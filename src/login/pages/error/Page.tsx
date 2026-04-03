/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/error/Page.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";

export function Page() {
    const { kcContext } = useKcContext();
    const HOME_URL = (kcContext as any).properties?.VITE_HOME_URL ?? "http://localhost:7999";
    assert(kcContext.pageId === "error.ftl");

    const { msg } = useI18n();

    return (
        <Template displayMessage={false} headerNode={msg("errorTitle")}>
            <div id="kc-error-message" className="space-y-4">
                <Alert variant="error">
                    <AlertDescription>
                        <span
                            className="instruction"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(kcContext.message.summary)
                            }}
                        />
                    </AlertDescription>
                </Alert>

                {!kcContext.skipLink && (
                    <div className="flex justify-end">
                        <Button type="button" asChild>
                            <a id="backToApplication" href={HOME_URL}>
                                {msg("backToApplication")}
                            </a>
                        </Button>
                    </div>
                )}
            </div>
        </Template>
    );
}
