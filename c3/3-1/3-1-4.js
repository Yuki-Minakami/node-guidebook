// 实现正则匹配规则
String.prototype.isEmpty=function(){
    return this.length === 0;
}
function isMatch(text,pattern){
if(pattern.isEmpty()) return text.isEmpty();
// 判断第一个字符是否相同
    function first_match(){
        return (!text.isEmpty() &&
        (pattern.charAt(0) == text.charAt(0) || pattern.charAt(0) == '.'));
    }

    if(pattern.length >=2 && pattern[1] == '*'){
        return (isMatch(text, pattern.substr(2)) ||
        (first_match() && isMatch(text.substr(1), pattern)));
    }else{
        return first_match() && isMatch(text.substr(1),pattern.substr(1))
    }
}


isMatch('aa','a*');// true