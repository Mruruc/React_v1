

/**
 * Description
 * The includes() method returns true if an array contains a specified value.
 * The includes() method returns false if the value is not found.
 * The includes() method is case sensitive.

 *Syntax
 *array.includes(element, start)
 *first parameter is required the second is optional.
 */

/**
 * Object.values()
 * Any JavaScript object can be converted to an array using Object.values():
 */

/***
 * Object.values() is a method provided by the FormData object. When you call Object.values(), it returns an iterator. An iterator is an object that allows you to loop through a collection of values one at a time.
 */

export default function validation(formData){
  const values=[...formData.values()];
  values.forEach((value,index)=>{
    if(!value){
      if(index ===0 )
       return alert('UserName Can Not Be Empty!');
    if(index===1){
      return alert('Email Can Not Be Empty!');
    }
     return alert('Password Can Not Be Empty! ');
    }
  });
}