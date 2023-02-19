import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class additionalClass1 additionalClass2';
        expect(
            classNames('class', {}, ['additionalClass1', 'additionalClass2']),
        ).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class modClass1';
        expect(classNames('class', { modClass1: true, modClass2: false })).toBe(
            expected,
        );
    });
});
