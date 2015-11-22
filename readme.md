![Logo](http://i.imgur.com/HzEq0fj.jpg?1)

## Install
```
$ npm install -g text-to-json-cli
```


## 🌈 Usage 🌈
```

$ ttj <file>

Options                                                          
     -f,  --file,  File to convert                                  
     -c,  --comments, allow comments                                
     -d,  --delimiter, delimiter for key value pairs                
     -fg, --forgiving, doesn't throw error for duplicate keys (recommend leaving this off ) 
     -l,  --log, Wether to log when forgiving ignores an error  


Examples
Yes, files can also contain comments. the default is the "%" sign but you can specify it to whatever you want. ↓see below.↓

Unicorns.txt:
% A comment
foo
bar
baz

penguin.txt
foo:bar 
bar:baz
bar:baz
baz:bar

squirrel.txt
foo=bar
bar=baz
baz=foo

albatross.txt
# A comment
foo=bar
bar=baz
baz=foo


  $ ttj --file "unicorn.txt" --output "super-unicorn.json"
     => processes unicorn.txt => ["foo", "bar", "baz"] => super-unicorn.json 
  
  $ ttj --file "penguin.txt" --output "super-penguin.json" --forgiving
     => processes penguin.txt => ignores duplicates => {foo: "bar", bar: "baz", bar: "baz", baz: "bar"} => super-penguin.json
     
  $ ttj --file "squirrel.txt" --delimiter "="
     => processes squirrel.txt => sets delimiter to "=" => {foo: "bar", bar: "baz", baz: "foo"} => squirrel.json
    
  $ ttj --file "albatross.txt" --comments "#"
     => processes albatross.txt => sets comment identifier to "#" => {foo: "bar", bar: "baz", baz: "foo"} => albatross.json         
  
```

## 🍭 API 🍭
If the examples above didn't get you what you needed here is some more detail.

### ttj
##### --file
Type: ``` string ```

File to be processed

##### --comments
Type: ``` string ```

This is the character that will be used to signify comments. Default is "%"

#### --delimiter
Type: ``` string ```

This is the character that will be used to seperate key/value pairs. Default is ":"

#### --forgiving
Type: ``` boolean ```

Adding this will allow the existence of duplicate keys and not throw an error. This is false by default.

#### --log
Type: ``` boolean ```

Adding this will log when forgiving ignores an error. This is true by default.



## License
MIT ©[Maximilian Lloyd](http://www.maxlloyd.no)
