const {commanderModule} = require('../index.js');
const testFile = 'TEST.md';


    describe ('commanderModule', () => { 
        it ('should be an object', () => { 
            expect (typeof commanderModule).toBe('object');
    });
    describe('read md', () => { 
        it ('should be a function', () => { 
            expect (typeof commanderModule.mdLinks).toBe('function');
        });
    });
    describe('stats', () => { 
        it ('should be a function', () => { 
            expect (typeof commanderModule.showStats).toBe('function');
        });
    });
    describe('validate', () => { 
        it ('should be a function', () => { 
            expect (typeof commanderModule.validateLinks).toBe('function');
        });
    });
    describe('TEST.md', () => { 
        it ('It should read a .md file', () => { 
            expect (commanderModule.mdLinks(testFile)).toBe(true);
        });
    });
}); 