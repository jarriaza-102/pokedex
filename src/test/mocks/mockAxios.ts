import axios from 'axios';

// Mock jest and set the type
jest.mock('axios');
export const mockedAxios = axios as jest.Mocked<typeof axios>;

export const mockGet = mockedAxios.get;