const maskEmailDbc = /[a-z0-9.]+@[dbccompany]+.[com]+.[br]+$/gi
const maskEmail = [/[a-z0-9]/, '@', 'd', 'b', 'c', 'c', 'o', 'm', 'p', 'a', 'n', 'y', '.', 'c', 'o', 'm', '.', 'b', 'r' ]

export {maskEmailDbc, maskEmail}