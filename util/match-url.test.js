const matchUrl = require('./match-url')

let fakeUrl = 'FolioBot-AlexeiAccio-01-11-14?12'

test('Get query', () => {
    expect(matchUrl.getQuery(fakeUrl)).toBe('12')
})

test('Get base', () => {
    expect(matchUrl.getBase(fakeUrl)).not.toBeUndefined()
    expect(matchUrl.getBase(fakeUrl)).not.toMatch(/\?/)
    expect(matchUrl.getBase(fakeUrl)).toMatch(/Foliobot/i)
})
