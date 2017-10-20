# Generic Collections

A library for .NET like generic collections.

## About
This library is an implmentation of collections similar to .NET, the two collections this library focuses on are List<T> and Dictionary<T>. The reason for this are these are the most commonly used collection (from my person experience).

### List
The List class provides access to a list of objects which can be accessed via index. The List class uses a similar interface to the .NET List<T> class and provides additionaly functionaly beyond array.

### Dictionary
The dictionary class is a key value pair collection. The dictionary class uses a similar interface to that of the .NET Dictionary<TKey, TValue> class.

The key benefit of this class over the traditional `dict['key'] = "testing";` approch is the ability to use complex objects as the key. It does this by generating a hash for the key using the has to look up the value.

### Linq
The library provides some basic linq methods which can be called on any generator function. 

Currently this extends the IterableIterator prototype and further consideration of the pros and cons of this approch.

## License
This project has been released under the MIT License, the text of which is included below:
>MIT License
>
>Copyright (c) 2017 Antony Jones
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in >all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
>SOFTWARE.