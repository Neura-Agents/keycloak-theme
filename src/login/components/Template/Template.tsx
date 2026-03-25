/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/Template.tsx"
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@radix-ui/react-tooltip";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, Refresh01Icon } from "@hugeicons/core-free-icons";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import shape from "./../../assets/img/shape.svg";
import { useInitializeTemplate } from "./useInitializeTemplate";

const APP_NAME = "Neura Agents";
const APP_TAGLINE = "Build and deploy AI agents effortlessly.";

export function Template(props: {
    displayInfo?: boolean;
    displayMessage?: boolean;
    displayRequiredFields?: boolean;
    headerNode: ReactNode;
    socialProvidersNode?: ReactNode;
    infoNode?: ReactNode;
    documentTitle?: string;
    bodyClassName?: string;
    children: ReactNode;
}) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        children
    } = props;

    const { kcContext } = useKcContext();

    const { auth, url, message, isAppInitiatedAction } = kcContext;

    const { msg, msgStr } = useI18n();

    const { kcClsx } = useKcClsx();

    useEffect(() => {
        document.title =
            documentTitle ??
            msgStr("loginTitle", kcContext.realm.displayName || kcContext.realm.name);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    useInitializeTemplate();

    return (
        <div className="grid min-h-svh lg:grid-cols-2 ">
            <div className="bg-primary relative hidden lg:block dark:bg-background">
                <div className="flex items-center pt-20 h-full justify-center z-1">
                    <div className="absolute right-0 top-0 w-full max-w-62.5 xl:max-w-112.5">
                        <img src={shape} alt="grid" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full max-w-62.5 rotate-180 xl:max-w-112.5">
                        <img src={shape} alt="grid" />
                    </div>

                    <div className="flex justify-center my-auto flex-col items-center max-w-xs">
                        <div className="mb-4 flex items-center gap-3">
                            <div
                                className="h-12 w-12 bg-contain bg-no-repeat bg-center"
                                style={{ backgroundImage: 'var(--logo-url)' }}
                            />
                            <span className="text-foreground text-xl font-season-mix"> {APP_NAME}</span>
                        </div>

                        <p className="text-center  text-muted-foreground ">
                            {APP_TAGLINE}
                        </p>
                    </div>
                </div>
            </div>
            {/* Main content */}
            <div className="relative flex flex-col gap-4 px-0 py-0 pb-6 lg:p-6 lg:md:p-10 lg:pt-10 min-h-screen lg:min-h-0">
                {/*  navigation */}
                <div className="absolute top-4 inset-s-4 z-20 flex gap-2">
                    <Button type="button" variant="ghost" asChild>
                        <a href="http://localhost:8080">
                            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} className="mr-2" />
                            Home
                        </a>
                    </Button>
                </div>



                <div className="flex flex-1 items-center justify-center flex-col">
                    <div className="w-full max-w-xl">

                        <Card className="shadow-none bg-card rounded-2xl">
                            <CardHeader>
                                <CardTitle>
                                    {/* Mobile header with logo */}
                                    <div className="lg:hidden relative mt-4">
                                        <div className="flex flex-col items-center justify-center gap-0 mb-2">
                                            <div className="mb-2 flex items-center gap-3">
                                                <div
                                                    className="h-10 w-10 bg-contain bg-no-repeat bg-center"
                                                    style={{ backgroundImage: 'var(--logo-url)' }}
                                                />
                                                <span className="text-xl font-season-mix"> {APP_NAME}</span>
                                            </div>
                                            <p className="text-base text-muted-foreground text-center font-matter">
                                                {APP_TAGLINE}
                                            </p>
                                        </div>
                                    </div>
                                    {(() => {
                                        const node = !(
                                            auth !== undefined &&
                                            auth.showUsername &&
                                            !auth.showResetCredentials
                                        ) ? (
                                            <h1 className="text-xl">{headerNode}</h1>
                                        ) : (
                                            <div
                                                id="kc-username"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <label
                                                    className="font-semibold text-lg"
                                                    id="kc-attempted-username"
                                                >
                                                    {auth.attemptedUsername}
                                                </label>

                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                asChild
                                                            >
                                                                <a
                                                                    id="reset-login"
                                                                    href={
                                                                        url.loginRestartFlowUrl
                                                                    }
                                                                    aria-label={msgStr(
                                                                        "restartLoginTooltip"
                                                                    )}
                                                                >
                                                                    <HugeiconsIcon icon={Refresh01Icon} className="h-4 w-4" />
                                                                </a>
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>
                                                                {msg(
                                                                    "restartLoginTooltip"
                                                                )}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        );

                                        if (displayRequiredFields) {
                                            return (
                                                <div className="flex items-center justify-between gap-2">
                                                    <div>{node}</div>
                                                    <div>
                                                        <span className="subtitle">
                                                            <span className="text-red-500">
                                                                *
                                                            </span>
                                                            {msg("requiredFields")}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return node;
                                    })()}
                                </CardTitle>

                            </CardHeader>
                            <CardContent>
                                <div id="kc-content" className="space-y-4">
                                    {displayMessage &&
                                        message !== undefined &&
                                        (message.type !== "warning" ||
                                            !isAppInitiatedAction) && (
                                            <Alert variant={message.type}>
                                                <AlertDescription>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: kcSanitize(
                                                                message.summary
                                                            )
                                                        }}
                                                    />
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    {socialProvidersNode}
                                    {children}
                                    {auth !== undefined &&
                                        auth.showTryAnotherWayLink && (
                                            <form
                                                id="kc-select-try-another-way-form"
                                                action={url.loginAction}
                                                method="post"
                                            >
                                                <div
                                                    className={kcClsx(
                                                        "kcFormGroupClass"
                                                    )}
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="tryAnotherWay"
                                                        value="on"
                                                    />
                                                    <a
                                                        href="#"
                                                        id="try-another-way"
                                                        onClick={event => {
                                                            document.forms[
                                                                "kc-select-try-another-way-form" as never
                                                            ].submit();
                                                            event.preventDefault();
                                                            return false;
                                                        }}
                                                    >
                                                        {msg("doTryAnotherWay")}
                                                    </a>
                                                </div>
                                            </form>
                                        )}
                                    {displayInfo && (
                                        <div className="text-center text-sm">
                                            {infoNode}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>


        </div>
    );
}
