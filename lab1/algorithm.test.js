describe("algorithm function", function () {

    describe("проверка основного функционала алгоритма", () => {
        it("возвратить только те слова, которые отличаются от первого слова", function () {
            expect(algorithm('hi figaoro hidden ffhiff lpohii history.')).to.eql(['figaoro']);
            expect(algorithm('l lack blb tillt.')).to.eql([]);
        });
        it("возвратить только те слова, у которых последняя буква включается ещё раз", function () {
            expect(algorithm('BANG ff ll hello hi futher ruther both BANGll.')).to.eql(['ff', 'll', 'ruther']);
        });
    });

    describe("проверка лимитов наложенных на текст", () => {
        const errorMsg = 'The limit of words reached!';
        const errorConstructor = Error;

        it("выбросить ошибку, если слов < 2", function () {
            expect(() => algorithm('fff')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('hi')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('')).to.throw(errorConstructor, errorMsg);
        });
        it("выбросить ошибку, если слов > 50", function () {
            expect(() => algorithm(`
            fff ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd.`)).to.throw(errorConstructor, errorMsg);
        });
        it("выбросить ошибку, если за послденим словом НЕ точка", () => {
            const errorMsg = 'The last word does not ending with dot!';
            const errorConstructor = Error;

            expect(() => algorithm('fff privet myr tyt')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('hi hidden worrrier funfuf')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('tyt tyt')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('sdf dsf sd .')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('sdf dsf sd $().')).to.throw(errorConstructor, errorMsg);
        });
    });

    describe("проверка корректности и лимитов слов в тексте", () => {
        const errorMsg = 'The limit of word symbols reached!';
        const errorConstructor = Error;

        it("выбросить ошибку, если количество символов в слове > 8", function () {
            expect(() => algorithm('fff hello world here abcdefgijklmn.')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('fff hello ffaacceell here abcd.')).to.throw(errorConstructor, errorMsg);
            expect(() => algorithm('a b c d e f g lllllllll.')).to.throw(errorConstructor, errorMsg);
        });
        it("игнорировать НЕ латинские символы 8", function () {
            expect(algorithm('privet poo(kaa fff-ddd.')).to.eql(['poo', 'kaa', 'fff', 'ddd']);
            expect(algorithm('privet ll$ll !-!hndden.')).to.eql(['ll', 'll', 'hndden']);
        });
    });

});