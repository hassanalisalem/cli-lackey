const Parser = require('./../src/Tools/Parser.js')

let parser = (new Parser).parse('test {arg1} {arg1} {--option1} {--option2}')

test('can get arguments', () => {
    expect(parser.getArgs()).toEqual(['arg1', 'arg2'])
})

test('can get options', () => {
    expect(parser.getOptions()).toEqual(['option1', 'option2'])
})
