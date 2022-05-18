import { useInjection } from "inversify-react";

export function useControl<T>(type: string) {
    return useInjection<T>(`control.${type}`);
}
