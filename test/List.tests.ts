import 'mocha';
import * as assert from 'assert';
import List from '../src/List';

suite("List", function () {
    suite("Should add items and access them using index", function () {
        test("First entry", function () {
            // Arrange
            const target = new List<number>();
            const expected = 10;

            // Act
            target.add(expected);
            const actual = target[0];

            // Assert
            assert.equal(actual, expected);
        })
        test("second entry", function () {
            // Arrange
            const target = new List<number>();
            const expected = 20;

            // Act
            target.add(10);
            target.add(expected);
            const actual = target[1];

            // Assert
            assert.equal(actual, expected);
        })
        test("Third entry", function () {
            // Arrange
            const target = new List<number>();
            const expected = 30;

            // Act
            target.add(10);
            target.add(20);
            target.add(expected);
            const actual = target[2];

            // Assert
            assert.equal(actual, expected);
        })
    });

    test("Should return count of items", function () {
        // Arrange
        const target = new List<number>();
        target.add(1);
        target.add(2);
        target.add(3);
        const expected = 3;

        // Act
        const actual = target.count;

        // Assert
        assert.equal(actual, expected);
    });

    test("Should not be readonly", function () {
        // Arrange
        const target = new List<number>();
        const expected = false;

        // Act
        const actual = target.isReadOnly;

        // Assert
        assert.equal(actual, expected);
    });

    test("Should be iterable", function () {
        // Arrange
        const target = new List<number>();
        target.add(1);
        target.add(2);
        target.add(3);
        const expected = "123";

        // Act
        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    suite("Contains", function () {
        test("Should return true if the item exists", function () {
            // Arrange
            const target = new List<number>();
            target.add(1);
            target.add(2);
            target.add(3);
            const expected = true;

            // Act
            const actual = target.contains(2);

            // Assert
            assert.equal(actual, expected);

        });

        test("Should return false if the item doesnt exist", function () {
            // Arrange
            const target = new List<number>();
            target.add(1);
            target.add(2);
            target.add(3);
            const expected = false;

            // Act
            const actual = target.contains(5);

            // Assert
            assert.equal(actual, expected);
        });
    });

    test("Should be able to insert items", function () {
        // Arrange
        const target = new List<string>();
        target.add("a");
        target.add("b");
        target.add("c");
        const expected = "a123bc";

        // Act
        target.insert(1, "1");
        target.insert(2, "2");
        target.insert(3, "3");

        let actual: string = "";
        for (let item of target) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should remove item at a given index", function () {
        // Arrange
        const target = new List<number>();
        target.add(1);
        target.add(2);
        target.add(3);
        const expected = "13";

        // Act
        target.removeAt(1);

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should remove specified item", function () {
        // Arrange
        const target = new List<number>();
        target.add(1);
        target.add(2);
        target.add(3);
        const expected = "13";

        // Act
        target.remove(2);

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should copy data to an array", function () {
        // Arrange
        const target = new List<number>();
        target.add(1);
        target.add(2);
        target.add(3);
        const expected = "[1,2,3]";

        // Act
        let array: number[] = [];
        target.copyTo(array);

        const actual = JSON.stringify(array);

        // Assert
        assert.equal(actual, expected);
    });

    test("Should copy data to an array starting at a set index", function () {
        // Arrange
        const target = new List<number>();
        const expected = false;

        // Act
        const actual = target.isReadOnly;

        // Assert
        assert.equal(actual, expected);
    });

    test("Should not be instansible from an array", function () {
        // Arrange
        let target: List<number>;
        let array: number[] = [1, 2, 3];
        const expected = "123";

        // Act
        target = new List(array);

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should not be instansible from an IterableIterator", function () {
        // Arrange
        let target: List<number>;
        let iterator = function* (): IterableIterator<number> {
            yield 1;
            yield 2;
            yield 3;
        };
        const expected = "123";

        // Act
        target = new List(iterator());

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should add range of items", function () {
        // Arrange
        const target = new List<number>();
        let iterator = function* (): IterableIterator<number> {
            yield 1;
            yield 2;
            yield 3;
        };
        const expected = "123";

        // Act
        target.addRange(iterator());

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should insert range of items", function () {
        // Arrange
        const target = new List<number>();
        target.add(0);
        target.add(4);
        target.add(5);
        let iterator = function* (): IterableIterator<number> {
            yield 1;
            yield 2;
            yield 3;
        };
        const expected = "012345";

        // Act
        target.insertRange(1, iterator());

        let actual = "";
        for (let item of target) {
            actual += item.toString();
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should remove all items which match a predicate", function () {
        // Arrange
        const target = new List<number>();
        const expected = "246810";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        // Act
        target.removeAll(x => x % 2 !== 0);

        let actual: string = "";
        for (let item of target) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should be sorted using a comparer", function () {
        // Arrange
        const target = new List<number>();
        const expected = "12345678910";
        target.add(9);
        target.add(10);
        target.add(4);
        target.add(7);
        target.add(8);
        target.add(5);
        target.add(6);
        target.add(2);
        target.add(1);
        target.add(3);

        const comparer = (x: number, y: number) => {
            if (x === y) return 0;
            if (x > y) return 1;
            return -1;
        };

        // Act
        target.sort(comparer);

        let actual: string = "";
        for (let item of target) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should be reversable", function () {
        // Arrange
        const target = new List<number>();
        const expected = "12876543910";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        const comparer = (x: number, y: number) => {
            if (x === y) return 0;
            if (x > y) return 1;
            return -1;
        };

        // Act
        target.reverse(2, 6);

        let actual: string = "";
        for (let item of target) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should be binary searchable", function () {
        // Arrange
        const target = new List<number>();
        const expected = 2;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        // Act
        const actual = target.binarySearch(3);

        // Assert
        assert.equal(actual, expected);
    });

    test("Should return range of items", function () {
        // Arrange
        const target = new List<number>();
        const expected = "345678";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        const comparer = (x: number, y: number) => {
            if (x === y) return 0;
            if (x > y) return 1;
            return -1;
        };

        // Act
        const actualList = target.getRange(2, 6);

        let actual: string = "";
        for (let item of actualList) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });

    test("Should return index of given item", function () {
        // Arrange
        const target = new List<number>();
        const expected = 2;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        // Act
        const actual = target.indexOf(3);

        // Assert
        assert.equal(actual, expected);
    });

    test("Should return last index of given item", function () {
        // Arrange
        const target = new List<number>();
        const expected = 6;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(4);
        target.add(3);
        target.add(2);
        target.add(1);

        // Act
        const actual = target.lastIndexOf(3);

        // Assert
        assert.equal(actual, expected);
    });

    test("Should remove items in a range", function () {
        // Arrange
        const target = new List<number>();
        const expected = "12910";
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        // Act
        target.removeRange(2, 6);

        let actual: string = "";
        for (let item of target) {
            actual += item;
        }

        // Assert
        assert.equal(actual, expected);
    });
    
    test("Should clear all items", function () {
        // Arrange
        const target = new List<number>();
        const expected = 0;
        target.add(1);
        target.add(2);
        target.add(3);
        target.add(4);
        target.add(5);
        target.add(6);
        target.add(7);
        target.add(8);
        target.add(9);
        target.add(10);

        // Act
        target.clear();
        const actual = target.count;

        // Assert
        assert.equal(actual, expected);
    });
});