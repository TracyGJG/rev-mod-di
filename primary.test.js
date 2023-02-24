import { jest } from '@jest/globals';

import * as Secondary from './secondary.js';

import Primary from './primary.js';

const mockSecondary = {
	sayHello: jest.fn((subject = '') => `_${subject}_`),
};

const { welcome } = Primary(mockSecondary);

describe('welcome', () => {
	test('default', () => {
		expect(welcome()).toBe('____');
	});

	test('defined', () => {
		expect(welcome('Earth')).toBe('__Earth__');
	});
});
