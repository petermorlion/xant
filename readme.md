You know when your Mocha test files become very large?
First of all, it might mean the class you are testing
is doing too much (Single Responsibility!).

But if you decide that's not the case, or there isn't
very much you can do about it, Theo can help.

Theo is a small Node CLI application that will print
out the structure of your Mocha test file.

## Usage

Download/clone the repository and run `npm install -g`.

Run the application by running:

```
theo parse /path/to/my/testfile.js
```

This will print out the structure of your mocha test. For
example:

```
MyClass
    When calling foo
        should return bar
        should do something
    When calling bar
        should return foo
```

## Why Theo?

 > There are only two hard things in Computer Science: cache invalidation and naming things.
 >
 > -- Phil Karlton

As I needed this for Mocha tests, I Googled around. [Caffè Mocha](https://en.wikipedia.org/wiki/Caff%C3%A8_mocha)
is a beverage that includes chocolate. Everyone loves chocolate. Chocolate
includes a molecule named [Theobromine](https://en.wikipedia.org/wiki/Theobromine).
Thus, Theo. Not so far-fetched is it? :smile:
