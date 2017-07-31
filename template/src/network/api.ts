import network from './index';

export default {
    async getIndex(){
        const res = await network.get({
            url: `/auth/captcha`,
            data: {}
        });
        return res;
    }
}