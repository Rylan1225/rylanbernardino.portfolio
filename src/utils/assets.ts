/** Resolve a file from /public so it works under any deploy base path. */
export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
