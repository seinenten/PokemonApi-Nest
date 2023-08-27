

export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongo_db: process.env.MONGO_DB,
    port: process.env.PORT || 3002
})