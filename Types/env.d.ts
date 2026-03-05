declare namespace NodeJS {
    interface ProcessEnv {
        PORT: number;
        STR_CONNECTION_DB: string;
        USER_ACCESS_ROUTE: string;
        SECRET_TOKEN: string

    }
}