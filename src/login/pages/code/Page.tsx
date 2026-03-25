/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/pages/code/Page.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "code.ftl");

    const [copied, setCopied] = useState(false);

    const { msg } = useI18n();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(kcContext.code.code ?? "");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Template
            headerNode={
                kcContext.code.success
                    ? msg("codeSuccessTitle")
                    : msg("codeErrorTitle", kcContext.code.error)
            }
        >
            <div id="kc-code">
                {kcContext.code.success ? (
                    <>
                        <Field>
                            <FieldLabel htmlFor="code">
                                {msg("copyCodeInstruction")}
                            </FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    id="code"
                                    defaultValue={kcContext.code.code}
                                    readOnly
                                    className="font-mono"
                                />
                                <InputGroupAddon align="inline-end" >
                                    <Button
                                        onClick={handleCopy}
                                        variant="secondary"
                                        size="icon"
                                        className="size-4"
                                        aria-label="Copy code to clipboard"
                                    >
                                        {copied ? (
                                            <HugeiconsIcon icon={Tick01Icon} className="text-green-500" size={16} />
                                        ) : (
                                            <HugeiconsIcon icon={Copy01Icon} size={16} />
                                        )}
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                    </>
                ) : (
                    kcContext.code.error && (
                        <Alert variant="error">
                            <AlertDescription>
                                <p
                                    id="error"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(kcContext.code.error)
                                    }}
                                />
                            </AlertDescription>
                        </Alert>
                    )
                )}
            </div>
        </Template >
    );
}
