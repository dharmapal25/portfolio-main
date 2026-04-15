import API from './api';

const sendEmail = async (data) => {
    try {
        const response = await API.post('/send-email', data);
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export { sendEmail };