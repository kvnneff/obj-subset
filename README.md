# obj-subset

Determine if one object is a subset of another object.

## Installation

npm:

    $ npm install obj-subset

component:

    $ component install staygrimm/obj-subset

## API

### subset(object, subsetObject)

Returns `true` if `object` contains all of the properties and values of `subsetObject`, otherwise returns `false`.

## Usage

    var isSubset = require('obj-subset');

    var users = [{
        id: '1234',
        name: 'Foo',
        email: 'bar@baz.com'
    },
    {
        id: '5678',
        name: 'Foo',
        email: 'bar@qux.com'
    }];

    var lookUp = {
        name: 'Foo',
        email: 'bar@qux.com'
    };

    isSubset(users[0], lookUp); // returns `false`
    isSubset(users[1], lookUp); // returns `true`

### License

The MIT License (MIT)

Copyright (c) 2015 River Grimm <river.grimm@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.