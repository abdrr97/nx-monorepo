export default {
  getHost: () => {
    return process.env.HOST ?? 'localhost';
  },
  getPort: () => {
    return process.env.PORT ? Number(process.env.PORT) : 3000;
  },
};
