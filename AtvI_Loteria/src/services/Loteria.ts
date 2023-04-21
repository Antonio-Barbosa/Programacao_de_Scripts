import { LoteriaProps } from '../types';
import api from './api';

class Loteria {
    async get(): Promise<LoteriaProps> {
        const { data } = await api.get('');
        return data;
    }

}

export default new Loteria();