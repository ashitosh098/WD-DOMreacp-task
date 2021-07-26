var container = createEle("center", "container");
var h3Form = createEle("h3", "text-success");
h3Form.innerHTML = "Form";
var divForm = createEle("div", "");
divForm.id = "form";
var h3Table = createEle("h3", "text-success");
h3Table.innerHTML = "Table";

container.append(h3Form, divForm, h3Table);

var divTable = createEle("div", "");
divTable.id = "table";

document.body.append(container, divTable);

var form = createEle("form", "card");
form.id = "save";
// -- form-row
var row1 = createEle("div", "form-row");
var row2 = createEle("div", "form-row");
var row3 = createEle("div", "form-row");
var btn = createEle("button", "btn btn-outline-primary");

// -- inside form-row1
var col_md1 = createEle("div", "col-md-6 mb-3");
var col_md2 = createEle("div", "col-md-6 mb-3");

// -- inside col_md
var first_name = createEle("INPUT", "form-control");
first_name.setAttribute("required", "");
first_name.setAttribute("id", "firstName");

var last_name = createEle("INPUT", "form-control");
last_name.setAttribute("required", "");
last_name.setAttribute("id", "lastName");

var lbl1 = createEle("label", "");
var lbl2 = createEle("label", "");
lbl1.innerHTML = "First name";
lbl2.innerHTML = "Last name";

col_md1.append(lbl1, first_name);
col_md2.append(lbl2, last_name);
row1.append(col_md1, col_md2);

// -- form-row2
var col_md = createEle("div", "col-md mb-3");
var lbladdr = createEle("label", "");
lbladdr.innerHTML = "Address";
var addr = createEle("textarea", "form-control");
addr.setAttribute("required", "");
addr.setAttribute("id", "address");

col_md.append(lbladdr, addr);
row2.append(col_md);

// -- form-row3

var col1 = createEle("div", "col-md-4 mb-3");
var col2 = createEle("div", "col-md-4 mb-3");
var col3 = createEle("div", "col-md-4 mb-3");

var lblstate = createEle("label", "");
lblstate.innerHTML = "State";

var selstate = createEle("select", "custom-select");
selstate.id = "state";
selstate.setAttribute("required", "");

var sop = document.createElement("option");
var sop1 = document.createElement("option");
var sop2 = document.createElement("option");
var sop3 = document.createElement("option");
var sop4 = document.createElement("option");
var sop5 = document.createElement("option");

sop.setAttribute("selected", "");
sop.setAttribute("disabled", "");
sop.innerHTML = "Choose..";
sop1.innerHTML = "Tamilnadu";
sop2.innerHTML = "Karnataka";
sop3.innerHTML = "Kerala";
sop4.innerHTML = "Andhrapradesh";
sop5.innerHTML = "Madhyapradesh";
sop5.innerHTML = "Maharashtra";

sop.value = "";
sop1.value = "Tamilnadu";
sop2.value = "Karnataka";
sop3.value = "Kerala";
sop4.value = "Andhrapradesh";
sop5.value = "Madhyapradesh";
sop5.value = "Maharashtra";

selstate.append(sop, sop1, sop2, sop3, sop4, sop5);

var lblcountry = createEle("label", "");
lblcountry.innerHTML = "Country";
var country_inp = createEle("INPUT", "form-control");
country_inp.id = "country";
country_inp.setAttribute("required", "");

var lblpin = createEle("label", "");
lblpin.innerHTML = "Pincode";
var pin_code = createEle("INPUT", "form-control");
pin_code.id = "pincode";
pin_code.setAttribute("required", "");
pin_code.setAttribute("type", "number");

var lblgender = createEle("label", "");
lblgender.innerHTML = "Gender";

var divradio1 = createEle("div", "custom-control custom-radio");

var male_inp = createEle("INPUT", "custom-control-input");
male_inp.id = "male";
male_inp.setAttribute("required", "");
male_inp.setAttribute("checked", "true");
male_inp.setAttribute("type", "radio");
male_inp.setAttribute("name", "gender");
male_inp.checked = true;
male_inp.value = "male";

var lblmale = createEle("label", "custom-control-label");
lblmale.innerHTML = "Male";
lblmale.setAttribute("for", "male");

divradio1.append(male_inp, lblmale);

var divradio2 = createEle("div", "custom-control custom-radio");
var female_inp = createEle("INPUT", "custom-control-input");
female_inp.id = "female";
female_inp.setAttribute("required", "");
female_inp.setAttribute("type", "radio");
female_inp.setAttribute("name", "gender");
female_inp.value = "female";

var lblfemale = createEle("label", "custom-control-label");
lblfemale.innerHTML = "Female";
lblfemale.setAttribute("for", "female");

divradio2.append(female_inp, lblfemale);

// -- col3

var lblfood = createEle("label", "");
lblfood.innerHTML = "Food (Choose any 2)";
var selfood = createEle("select", "custom-select");
selfood.id = "food";
selfood.setAttribute("required", "");
selfood.setAttribute("multiple", "");

var fop1 = document.createElement("option");
var fop2 = document.createElement("option");
var fop3 = document.createElement("option");
var fop4 = document.createElement("option");
var fop5 = document.createElement("option");

fop1.innerHTML = "Meals";
fop2.innerHTML = "Dosa";
fop3.innerHTML = "Chapathi";
fop4.innerHTML = "Puri";
fop5.innerHTML = "Kuruma";

fop1.value = "Meals";
fop2.value = "Dosa";
fop3.value = "Chapathi";
fop4.value = "Puri";
fop5.value = "Kuruma";

selfood.append(fop1, fop2, fop3, fop4, fop5);

col1.append(lblstate, selstate, lblcountry, country_inp);
col2.append(lblpin, pin_code, lblgender, divradio1, divradio2);
col3.append(lblfood, selfood);

row3.append(col1, col2, col3);

btn.innerHTML = "Submit";
btn.setAttribute("type", "submit");

function createEle(elementName, classname = "") {
  var ele = document.createElement(elementName);
  ele.setAttribute("class", classname);
  return ele;
}

// form append
form.append(row1, row2, row3, btn);
document.getElementById("form").append(form);
var table = document.createElement("table");
table.setAttribute("class", "table table-striped table-hover");
var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");
var tr = document.createElement("tr");

createTrTh("th", "FIRST NAME");
createTrTh("th", "LAST NAME");
createTrTh("th", "ADDRESS");
createTrTh("th", "GENDER");
createTrTh("th", "STATE");
createTrTh("th", "ZIP");
createTrTh("th", "COUNTRY");
createTrTh("th", "FOOD");

//tr.append(th1, th2, th3);

var tbody = document.createElement("tbody");

function createTrTh(elementName, value = "") {
  var td = document.createElement(elementName);
  td.innerHTML = value;
  return tr.append(td);
  //return td;
}
thead.append(tr);
table.append(thead, tbody);
document.body.append(table);

//form = document.getElementById("save");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //checkInputs();
  var options = document.getElementById("food").selectedOptions;
  var values = Array.from(options).map(({ value }) => value);
  if (values.length < 2) {
    alert("Please select any 2 foods");
  } else {
    var tbodytr = document.createElement("tr");
    //var td1 = document.createElement("td");
    var td1 = createTr("td", document.getElementById("firstName").value);
    var td2 = createTr("td", document.getElementById("lastName").value);
    var td3 = createTr("td", document.getElementById("address").value);
    var td5 = createTr("td", document.getElementById("state").value);
    var td6 = createTr("td", document.getElementById("pincode").value);
    var td8 = createTr("td", "", "food");
    var td7 = createTr("td", document.getElementById("country").value);
    var td4 = createTr(
      "td",
      document.getElementById("male").checked
        ? document.getElementById("male").value
        : document.getElementById("female").value
    );

    function createTr(elementName, value = "", food = "") {
      var td = document.createElement(elementName);
      //return tbodytr.append(td);

      if (food == "food") {
        td.innerHTML = values.toString();
      } else {
        td.innerHTML = value;
      }
      return td;
    }
    tbodytr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tbodytr);
    //table.append(thead, tbody);
    document.getElementById("save").reset();
  }
});