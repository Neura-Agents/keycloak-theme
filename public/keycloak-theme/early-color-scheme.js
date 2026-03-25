/**
 * WARNING: Before modifying this file, run the following command:
 * 
 * $ npx keycloakify own --path "early-color-scheme.js" --public
 * 
 * This file is provided by @oussemasahbeni/keycloakify-login-shadcn version 250004.0.18.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

{
    const isDark = (() => {
        query_param: {
            const value = new URLSearchParams(location.search).get("dark");

            switch (value) {
                case "true":
                    return true;
                case "false":
                    return false;
                default:
                    break query_param;
            }
        }

        local_storage: {
            const value = localStorage.getItem("isDarkMode");

            if (value === null) {
                break local_storage;
            }

            switch (value) {
                case "dark":
                    return true;
                case "light":
                    return false;
                default:
                    break local_storage;
            }
        }

        return matchMedia("(prefers-color-scheme: dark)").matches;
    })();

    {
        const element = document.createElement("style");

        element.innerHTML = `:root { color-scheme: ${isDark ? "dark" : "light"}; }`;

        document.head.appendChild(element);
    }

    if (isDark) {
        document.documentElement.classList.add("dark");
    }

    document.documentElement.style.backgroundColor = isDark ? "#0A0A0A" : "#FFFFFF";
}
