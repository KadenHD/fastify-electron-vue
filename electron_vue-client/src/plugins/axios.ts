import { getToken } from '@/utils/token';
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_URL;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();