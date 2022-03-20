import { Enver } from '../src';
import { expect } from 'chai';
import dotenv from 'dotenv';
import path from 'path';

describe('Testing Env', () => {

    before(() => {
        dotenv.config({
            path: path.join(__dirname, '.env')
        });
    });

    describe('#get', () => {
        it('should return a valid string', () => {
            expect(Enver.get('STRING'))
                .to.equal('asd');
        });

        it('should not throw if the variable is defined but empty', () => {
            expect(Enver.get('EMPTY'))
                .to.equal('');
        });

        it('should return the default value if the variable is not found', () => {
            expect(Enver.get('VOID', 'default'))
                .to.equal('default');
        });

        it('should throw if the var is not defined', () => {
            expect(() => Enver.get('VOID'))
                .to.throw();
        });
    });

    describe('#getString', () => {
        it('should return the value of the environment variable', () => {
            expect(Enver.getString('STRING'))
                .to.equal('asd');
        });
    });

    describe('#getNumber', () => {
        it('should return the int value of the environment variable', () => {
            expect(Enver.getNumber('NUMBER'))
                .to.equal(123);
        });

        it('should return the decimal value of the environment variable', () => {
            expect(Enver.getNumber('DECIMAL'))
                .to.equal(3.1416);
        });

        it('should throw if the value is not a number', () => {
            expect(() => Enver.getNumber('STRING'))
                .to.throw('Environment variable STRING is not a number');
        });
    });

    describe('#getBoolean', () => {
        it('should return true when var is true', () => {
            expect(Enver.getBoolean('BOOLEAN'))
                .to.equal(true);
        });


        it('should return true when var is yes', () => {
            expect(Enver.getBoolean('BOOLEAN_A'))
                .to.equal(true);
        });


        it('should return true when var is 1', () => {
            expect(Enver.getBoolean('BOOLEAN_B'))
                .to.equal(true);
        });

        it('should return false when var is false', () => {
            expect(Enver.getBoolean('BOOLEAN_FALSE'))
                .to.equal(false);
        });


        it('should return false when var is no', () => {
            expect(Enver.getBoolean('BOOLEAN_FALSE_A'))
                .to.equal(false);
        });


        it('should return false when var is 0', () => {
            expect(Enver.getBoolean('BOOLEAN_FALSE_B'))
                .to.equal(false);
        });

        it('should throw if the value is not a boolean', () => {
            expect(() => Enver.getBoolean('STRING'))
                .to.throw('Environment variable STRING is not a boolean');
        });

        it('should return the default value if not found', () => {
            expect(Enver.getBoolean('VOID', true))
                .to.equal(true);
        });
    });

});