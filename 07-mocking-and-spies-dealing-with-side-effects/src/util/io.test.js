import {it, expect, vi} from "vitest";
import writeData from "./io.js";
import {promises as fs} from 'fs';

vi.mock('fs')
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

it('should execute write file method', function () {
    const testData = 'Test';
    const testFileName = 'test.txt';
    writeData(testData, testFileName)
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it('should return a promise that resolves to no value if called correctly ', function () {
    const testData = 'Test';
    const testFileName = 'test.txt';
    writeData(testData, testFileName)
    return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFileName,testData);
});