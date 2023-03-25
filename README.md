<!-- GETTING STARTED -->
## 1. Giới thiệu về prototype trong JS

Khái niệm:
   Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác.
   Được hiểu như là kế thừa (inheritance) ở javascript).
Mục đích tạo ra prototype:
   -    Mang tính kế thừa trong Javascript
   -    Truy cập vào thuộc tính đối tượng prototype chain.
        Prototype chain là cơ chế để Javascript duyệt lại qua các cấp kế thừa thông qua ```__proto__``` để tìm kiếm property và method được sử dụng.

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

1. Khởi động thôi (đi bộ để lấy tin thần nhé), tìm giá trị biến i để thỏa mãn các điều kiện sau:
    ```
    //let i = ?

    console.log(i * i); // => 0
    console.log(i + 1); // => 1
    console.log(i - 1); // => -1
    console.log(i / i); // => 1
 ---
    Giá trị i là: ... :)

2. Tản mản về kiến thức JS thôi. Object-oriented programming là cái gì? Có khó hiểu lắm không?
---
    Object-oriented programming ...
   
3. Sóng bắt đầu từ gió. Vậy Promises bắt đầu từ đâu và cơ chế sơ bộ cách vận hành của Promises?
---
    Promises là ...
    3 possible states: fulfilled, rejected, or pending
 
4. Em hiểu như thế nào về khái niệm closure trong JS? Và đưa ví dụ, ứng dụng như thế nào?
---
    Khái niệm closure là một hàm được viết lồng bên trong một hàm khác.
    Nó có thể sử dụng biến cục bộ, biến toàn cục của hàm cha và biến cục bộ của chính nó (lexical scoping).
    Và ghi nhớ nơi nó được tạo ra (môi trường thực thi).
    Ví dụ và ứng dụng: <3
    
5. Giải trí tý nào.
   Điều kiện:
    - Có một bình 5 lít và một bình 3 lít. 
    - Có quyền lấy nước không giới hạn vào 2 bình.
    
   Yêu cầu: Hãy đong 4 lít nước một cách chính xác.
---
   Tư duy chút nào:
   Đổ đầy bình 5 -> chuyển qua bình 3 -> Đổ bình 3 đi -> đổ bình 5 (đang còn 2) qua 3 -> đổ đầy bình 5 -> chuyển qua bình 3 (đang chứa 2 lít) cho đến khi đầy bình.
 
6. Em có biết về Anonymous functions không? Sẽ được sử dụng trong trường hợp nào?
---
    Anonymous functions hay còn gọi là hàm ẩn danh. Được sinh ra đúng vào thời điểm chạy của chương trình.
    Được sử dụng trong trường hợp: Chỉ muốn thực thi trong giai đoạn xử lí logic mà không muốn trình biên dịch lưu trữ nó trước đó.
    Lưu ý thêm: Khi bạn khai báo một hàm thì trình biên dịch sẽ lưu lại trong bộ nhớ.

7. Thay đổi chút suy nghĩ thôi. Output là trong trường hợp này là gì nhỉ?
    ```
        const x = [1, 2, 3];
        x[-1] = 'Pikachu';
        console.log(x[x.indexOf(10000)]);
    ```
---
    [Pikachu] hay [-1]  ???
    
8. Có bao nhiêu loại funtion trong JS và mô tả các kiểu khai bao hàm mà bạn biết?
---
    Có 2 loại function trong JS:
      - Có tham số
      - Không có tham số
    Có 3 kiểu khai báo function:
      - Function Declaration
      - Function Expression
      - Generator Functionn
     Function Declaration sẽ thường sử dụng từ khóa function rồi đến tên hàm. Còn Function Expression sẽ được bắt đầu với từ khóa var, const hoặc là let. 
9. Một chút kiến thức cấp 2, Cho tam giác vuông như hình, cạnh huyền là 10, chiều cao đến cạnh huyền bằng 6. Tính diện tích của hình tam giác ấy.
---
    Một tam giác vuông có cạnh huyền bằng 10 sẽ có chiều cao đến cạnh huyền tối đa bằng 5 mà thôi :))
10. Trong JS đều được mô tả dưới dạng các kiểu primitive (Kiểu nguyên thủy) và objects không?
   Nếu đúng như vậy thì điểm khác nhau là gì?
---
    Đúng vậy.
    JavaScript chỉ có các kiểu primitive (Kiểu nguyên thủy) và objects
        + Kiểu primitive: boolean, null, undefined, bigint, number, string, and symbol
        + objects
     Điểm khác nhau: Kiểu primitive không có bất kỳ thuộc tính hay phương thức nào.

11. Higher-Order function là gì? Em thường sử dụng ở đâu?
---
    Là hàm hoạt động trên các hàm khác , bằng cách lấy chúng làm tham số hoặc trả về chúng.
    Nói một cách đơn giản, một Higher-Order function là hàm nhận một hàm dưới dạng đối số hoặc trả về hàm dưới dạng đầu ra.
    
    Một số Higher-Order Functions được sử dụng trong JS: array.map(), array.filter(), ...

12. DOM manipulation (Thao tác với DOM) là gì?
---
    - Là DOM -> Document Object Model
    - Cấu trúc: https://javascript.info/dom-nodes
    - Nhiệm vụ:
        + Truy xuất đến/Thay đổi thuộc tính/CSS/Thêm/Xóa/Sửa  các thẻ html
    - Các loại DOM chính (8 loại):
        + DOM Node, Nodelist -> thao tác với HTML thông qua đối tượng (Object)
        + DOM Navigation -> dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối quan hệ cha - con của các thẻ HTML
        + DOM Listener -> có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó
        + DOM Event -> có nhiệm vụ gán các sự kiện như onclick(), onload() vào các thẻ HTML
        + DOM CSS -> có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML
        + DOM HTML -> có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML
        + DOM element -> có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như tên class, id, name của thẻ HTML
        + DOM document -> có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệu của website
    - Truy xuất DOM
        + Thông qua đối tượng document
        + Có 3 loại hình thức truy xuất:
            - qua id: document.getElementById
            - qua name: document.getElementsByTagName
            - qua class name: document.getElementsByClassName
 
13. Mục đích của ```void(0)``` ?
---
    Ví dụ như vậy nè: <a href="JavaScript:void(0);" onclick="alert('Prevent the page from refreshing!')">Click Me!</a> 

14. Explain the difference between block elements and inline elements?
---
    block elements <h1>, <p>, <ul>, <ol>, <li>
    inline elements <span>, <a>, <strong>, <i>, <img>

15. What does async and defer refer in script tag?
---
    Detail ref link: https://stackoverflow.com/questions/10808109/script-tag-async-defer
16. Bạn nghĩ trong JS ```prototype``` biểu thị cho vấn đề gì? 
---
    Có phải là: Prototype là cơ chế để thực hiện mô hình OOP của ngôn ngữ lập trình JavaScript, mà các object (đối tượng) kế thừa các tính năng từ nhau.
    Mỗi một object trong Javascript đều có một thuộc tính nội bộ (internal property) gọi là prototype
    
17. Vòng đời của biến trong javascript có bao nhiêu giai đoạn? Liệt kê giúp mình nhé.
---
    Không biết có đúng không ta:
    - Khai báo
    - Khởi tạo giá trị mặc định
    - Gán một giá trị cho biến được khởi tạo
    
18. Tìm satoshi sao cho thõa mãn đk sau:
```
    const satoshi = ???
    if (satoshi == 1 && satoshi == 2 && satoshi == 3) {
        console.log('<3 Pikachu');
    }
```
---
    satoshi = ???
    
19. IIFE (Immediately Invoked Function Expressions) là gì ta ? Nếu học được nó sẽ giúp mình lập tức có người yêu không nè ?
---
    Các hàm chạy ngay sau khi được định nghĩa. Còn gì nữa không nhỉ?

20. Đến phần Git và những người bạn. Đầu tiên nha: Git fork là gì? Sự khác nhau giữa git fork, branch và clone?
---
    
21. Khi nào nên sử dụng git rebase thay vì git merge?
---

22. Sự khác nhau giữa pull request và branch?
---

