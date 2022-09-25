import {it, expect, beforeEach, beforeAll, afterEach, afterAll} from 'vitest'
import {User} from "./hooks";

const testEmail = 'test@test.com';
let user;

beforeEach(() => {
    console.log('beforeEach')
    user = new User(testEmail);
});

beforeAll(() => {
    user = new User(testEmail);
    console.log('beforeAll')
});

afterEach(() => {
    console.log('afterEach')
    // user = new User(testEmail);
});

afterAll(() => {
    console.log('afterAll')
});

// describe.concurrent()
it.concurrent('should update the email', function () {
    const newEmail = 'test2@test.com';
    user.updateEmail(newEmail);
    expect(user.email).toBe(newEmail);
});

it.concurrent('should have an email property', function () {
    expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', function () {
    expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', function () {
    user.clearEmail();
    expect(user.email).toBe('')
});

it.concurrent('should still have an email property after clearing the email', function () {
    user.clearEmail();
    expect(user).toHaveProperty('email');
});