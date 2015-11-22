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
     -fg, --forgiving, doesn't throw error for duplicate keys (recommend leaving this off )     -l,  --log, whether to log when forgiving ignores an error
     -l,  --log, Wether to log when forgiving ignores an error  


Examples
  $ ttj --file "unicorn.txt" --output "super-unicorn.json"
  $ ttj --file "unicorn.txt" --output "super-unicorn.json" --forgiving
  $ ttj --file "unicorn.txt" --delimiter "="
```

## 🍭 API 🍭
All but the file paramter is optional 

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

Adding this will log when forgiving ignores an error. This is true by default.



## License
MIT ©[Maximilian Lloyd](http://www.maxlloyd.no)
