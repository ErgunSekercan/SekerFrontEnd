const tarih = new Date()

console.log(tarih)


console.log(tarih.getFullYear())
console.log(tarih.getMonth() + 1)
console.log(tarih.getTime())

/*
getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970) */

console.log(Date.now())