- Cở bản có 4 loại: Readable, Writable, Duplex, and Transform
- Readable => Sử dụng để đọc => fs.createReadStream
- Writable => Sử dụng để ghi => fs.createWriteStream
- Duplex => Có thể đọc và ghi => Socket TCP
- Transform được sử dụng như Duplex, nhưng mục đích chính là biến đổi dữ liệu khi đọc và ghi

- Các phương thức chính:
- ```pipe``` => Nối các dòng stream => ```const data = ...pipe(a).pipe(b).pipe(c)```


