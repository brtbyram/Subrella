import { UseMutationResult } from '@tanstack/react-query';

export function useLogin(): UseMutationResult<any, unknown, any, unknown>;
export function useRegister(values: any): Promise<any>;
export function useLogout(): Promise<void>;