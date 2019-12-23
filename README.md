# smooth-scroll
Vanilla JS smooth scroll by CSSLICK

## Usage
- set movable page(section) by ```id```
- set ```<a>``` tag(이동 버튼) class name to ```btn_page```
- set href attribute value by section id name(이동할 id명을 href에 추가)
```
  <section id="page1">
    <h1>page 1</h1>
    <a class="btn_page" href="#page2">page2</a>
  </section>
  <section id="page2">
    <h1>page 2</h1>
    <a class="btn_page" href="#page3">page3</a>
  </section>
  <section id="page3">
    <h1>page 3</h1>
    <a class="btn_page" href="#page1">page1</a>
  </section>
```
