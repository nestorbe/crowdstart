import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x98274d32Ab0711e60e4713C0E59A7B5F0466e96b'
);

export default instance;
