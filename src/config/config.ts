const {
  REACT_APP_URL,
  REACT_APP_SERVER_IP,
  REACT_APP_SERVER_PORT,
  REACT_APP_API_URL,
  REACT_APP_SWF_URL
} = process.env;

const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  url: isDevelopment ? 'http://localhost:3000' : REACT_APP_URL,
  swf: {
    url: isDevelopment ? 'https://swf-prod.habborool.org' : REACT_APP_SWF_URL
  },
  server: {
    ip: isDevelopment ? 'emu.habborool.org' : REACT_APP_SERVER_IP,
    port: isDevelopment ? '3000' : REACT_APP_SERVER_PORT
  },
  api: {
    url: isDevelopment ? 'http://localhost:3001' : REACT_APP_API_URL
  }
};
