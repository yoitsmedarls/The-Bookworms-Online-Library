var onlineStatus = navigator.onLine;
var offlineScreen = document.getElementById("offline-screen-container");
var mainContainer = document.getElementById("main-container");
var startScreen = document.getElementById("start-screen-container");
var libraryScreen = document.getElementById("library-screen-container");
var profileScreen = document.getElementById("my-account-screen");
var sidebarContainer = document.getElementById("sidebar-container");
var footerContainer = document.getElementById("footer-container");
var booksContainer = document.getElementById("books-container");
var myLibraryButton = document.getElementById("mylibrary-button");
var myLibraryBooksDisplay = document.getElementById("my-library-books-display");
var stepOne = document.getElementById("step-one");
var stepTwo = document.getElementById("step-two");
var universalBackButton = document.getElementById("universal-back-button");
var myLibraryContainer = document.getElementById("my-library-container");
var bookOneAuthor = "David Wallace-Wells";
var bookTwoAuthor = "Neil deGrasse Tyson";
var bookThreeAuthor = "Daniel Kahneman";
var bookFourAuthor = "Charles Duhigg";
var bookFiveAuthor = "Stephen Hawking";
var bookSixAuthor = "Rachel Carson";
var bookSevenAuthor = "Yuval Noah Harari";
var bookEightAuthor = "Howard Zinn";
var bookOneTitle = "<li> " + "The Uninhabitable Earth" + " | by " + bookOneAuthor + " </li>";
var bookTwoTitle = "<li> " + "Astrophysics for People in a Hurry" + " | by " + bookTwoAuthor + " </li>";
var bookThreeTitle = "<li> " + "Thinking Fast and Slow" + " | by " + bookThreeAuthor + " </li>";
var bookFourTitle = "<li> " + "The Power of Habit" + " | by " + bookFourAuthor + " </li>";
var bookFiveTitle = "<li> " + "A Brief History of Time" + " | by " + bookFiveAuthor + " </li>";
var bookSixTitle = "<li> " + "Silent Spring" + " | by " + bookSixAuthor + " </li>";
var bookSevenTitle = "<li> " + "Sapiens: A Brief History of Humankind" + " | by " + bookSevenAuthor + " </li>";
var bookEightTitle = "<li> " + "A People's History of the United States" + " | by " + bookEightAuthor + " </li>";
var borrowStatusOne = document.getElementById("borrowing-status-one");
var borrowStatusTwo = document.getElementById("borrowing-status-two");
var borrowStatusThree = document.getElementById("borrowing-status-three");
var borrowStatusFour = document.getElementById("borrowing-status-four");
var borrowStatusFive = document.getElementById("borrowing-status-five");
var borrowStatusSix = document.getElementById("borrowing-status-six");
var borrowStatusSeven = document.getElementById("borrowing-status-seven");
var borrowStatusEight = document.getElementById("borrowing-status-eight");
var alreadyAdded = "You have already added this book to your Library!";
var successfullyAdded = "This book is successfully added to your Library!";
var libraryFull = "You can only add three books to your library";
var noBookSelected = "You haven't selected any books yet. Browse the library and select the books you want to borrow.";
var accountExists = "This account already exists! Please login to this account and delete it if you wish to create a different account. Otherwise just login to this account instead. Thank you!";
var accountCreated = "Your account has now been created! Please refresh this page and choose the My Account button to visit your own library!";
var accountFull = "There's already an account created in our system! Please login to that account instead. In case credentials for that account is forgotten, you can clear browser data to reset our system as well!";
var inputError = "Please fill in all fields to continue!";
var bookProfileOne = document.getElementById("bookprofile-1");
var bookProfileTwo = document.getElementById("bookprofile-2");
var bookProfileThree = document.getElementById("bookprofile-3");
var bookProfileFour = document.getElementById("bookprofile-4");
var bookProfileFive = document.getElementById("bookprofile-5");
var bookProfileSix = document.getElementById("bookprofile-6");
var bookProfileSeven = document.getElementById("bookprofile-7");
var bookProfileEight = document.getElementById("bookprofile-8");
var selectedBooks = ["Here's a list of the books you've selected: <br />"];
var selectedBookCountDisplay = document.getElementById("selected-books-count");
var bookCount = selectedBooks.length - 1;
var sci1 = document.getElementById("sci-1");
var sci2 = document.getElementById("sci-2");
var env1 = document.getElementById("env-1");
var env2 = document.getElementById("env-2");
var his1 = document.getElementById("his-1");
var his2 = document.getElementById("his-2");
var pys1 = document.getElementById("pys-1");
var pys2 = document.getElementById("pys-2");
var dateToday = new Date();
var dateTodayDay = dateToday.getDate();
var dateTodayMonth = dateToday.getMonth();
var dateTodayYear = dateToday.getFullYear();
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (onlineStatus == true) {
	offlineScreen.style.display = "none";
	mainContainer.style.display = "block";
} else {
	offlineScreen.style.display = "block";
	mainContainer.style.display = "none";
}

selectedBookCountDisplay.innerHTML = bookCount;

if (Boolean(localStorage.getItem("bookone")) == true || Boolean(localStorage.getItem("booktwo")) == true || Boolean(localStorage.getItem("bookthree")) == true) {
	if (localStorage.getItem("returnDate") <= dateToday) {
		window.alert("Your borrow duration have expired. Please return the books immediately");
		var interval = window.setInterval(returnPrompt, 10000);
		function returnPrompt() {
			window.alert("Your borrow duration have expired. Please return the books immediately");
		}
	}
}

if (Boolean(localStorage.getItem("surname")) == true) {
	document.getElementById("start-screen-my-account-button").style.display = "block";
	document.getElementById("profile-h1-firstname").innerHTML = localStorage.getItem("firstname");
	document.getElementById("profile-panel-surname").innerHTML = localStorage.getItem("surname");
	document.getElementById("profile-panel-firstname").innerHTML = localStorage.getItem("firstname");
	document.getElementById("profile-panel-idnum").innerHTML = localStorage.getItem("idnumber");
	if (Boolean(localStorage.getItem("bookone")) == true || Boolean(localStorage.getItem("booktwo")) == true || Boolean(localStorage.getItem("bookthree")) == true) {
		document.getElementById("profile-panel-return-date").innerHTML = localStorage.getItem("returnDay") + " " + monthArray[localStorage.getItem("returnMonth")] + ", " + localStorage.getItem("returnYear");
		document.getElementById("profile-panel-date-borrowed").innerHTML = localStorage.getItem("currentDay") + " " + monthArray[localStorage.getItem("currentMonth")] + ", " + localStorage.getItem("currentYear");
	} else {
		document.getElementById("profile-panel-return-date").innerHTML = "<br /><br />All Books Returned! You can delete this borrow account to borrow another set of books.<br />Don't worry, once you have deleted this account, you can reuse the entered credentials here.";
	}
	if (Boolean(localStorage.getItem("bookthree")) == true) {
		document.getElementById("profile-panel-borrowed-bookthree").innerHTML = localStorage.getItem("bookthree");
		switch (localStorage.getItem("bookthree")) {
			case bookOneTitle:
				document.getElementById("book-to-return-id-1").style.display = "block";
				break;
			case bookTwoTitle:
				document.getElementById("book-to-return-id-2").style.display = "block";
				break;
			case bookThreeTitle:
				document.getElementById("book-to-return-id-3").style.display = "block";
				break;
			case bookFourTitle:
				document.getElementById("book-to-return-id-4").style.display = "block";
				break;
			case bookFiveTitle:
				document.getElementById("book-to-return-id-5").style.display = "block";
				break;
			case bookSixTitle:
				document.getElementById("book-to-return-id-6").style.display = "block";
				break;
			case bookSevenTitle:
				document.getElementById("book-to-return-id-7").style.display = "block";
				break;
			case bookEightTitle:
				document.getElementById("book-to-return-id-8").style.display = "block";
		}
	}
	if (Boolean(localStorage.getItem("booktwo")) == true) {
		document.getElementById("profile-panel-borrowed-booktwo").innerHTML = localStorage.getItem("booktwo");
		switch (localStorage.getItem("booktwo")) {
			case bookOneTitle:
				document.getElementById("book-to-return-id-1").style.display = "block";
				break;
			case bookTwoTitle:
				document.getElementById("book-to-return-id-2").style.display = "block";
				break;
			case bookThreeTitle:
				document.getElementById("book-to-return-id-3").style.display = "block";
				break;
			case bookFourTitle:
				document.getElementById("book-to-return-id-4").style.display = "block";
				break;
			case bookFiveTitle:
				document.getElementById("book-to-return-id-5").style.display = "block";
				break;
			case bookSixTitle:
				document.getElementById("book-to-return-id-6").style.display = "block";
				break;
			case bookSevenTitle:
				document.getElementById("book-to-return-id-7").style.display = "block";
				break;
			case bookEightTitle:
				document.getElementById("book-to-return-id-8").style.display = "block";
		}
	}
	if (Boolean(localStorage.getItem("bookone")) == true) {
		document.getElementById("profile-panel-borrowed-bookone").innerHTML = localStorage.getItem("bookone");
		switch (localStorage.getItem("bookone")) {
			case bookOneTitle:
				document.getElementById("book-to-return-id-1").style.display = "block";
				break;
			case bookTwoTitle:
				document.getElementById("book-to-return-id-2").style.display = "block";
				break;
			case bookThreeTitle:
				document.getElementById("book-to-return-id-3").style.display = "block";
				break;
			case bookFourTitle:
				document.getElementById("book-to-return-id-4").style.display = "block";
				break;
			case bookFiveTitle:
				document.getElementById("book-to-return-id-5").style.display = "block";
				break;
			case bookSixTitle:
				document.getElementById("book-to-return-id-6").style.display = "block";
				break;
			case bookSevenTitle:
				document.getElementById("book-to-return-id-7").style.display = "block";
				break;
			case bookEightTitle:
				document.getElementById("book-to-return-id-8").style.display = "block";
		}
	}
} else {
	document.getElementById("start-screen-my-account-button").style.display = "none";
}

function startBrowsing() {
	startScreen.style.display = "none";
	profileScreen.style.display = "none";
	libraryScreen.style.display = "block";
}

function myAccount() {
	startScreen.style.display = "none";
	libraryScreen.style.display = "none";
	profileScreen.style.display = "block";
}

function openMyLibrary() {
	if (bookCount == 0) {
		window.alert(noBookSelected);
	} else {
		sidebarContainer.style.display = "none";
		footerContainer.style.display = "none";
		booksContainer.style.display = "none";
		myLibraryButton.style.display = "none";
		stepOne.style.display = "none";
		myLibraryContainer.style.display = "block";
		stepTwo.style.display = "block";
	}
}

function openBookProfiles1() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileOne.style.display = "block";
}
function openBookProfiles2() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileTwo.style.display = "block";
}
function openBookProfiles3() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileThree.style.display = "block";
}
function openBookProfiles4() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileFour.style.display = "block";
}
function openBookProfiles5() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileFive.style.display = "block";
}
function openBookProfiles6() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileSix.style.display = "block";
}
function openBookProfiles7() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileSeven.style.display = "block";
}
function openBookProfiles8() {
	sidebarContainer.style.display = "none";
	footerContainer.style.display = "none";
	booksContainer.style.display = "none";
	myLibraryButton.style.display = "none";
	stepOne.style.display = "none";
	universalBackButton.style.display = "block";
	bookProfileEight.style.display = "block";
}

function closeBookProfiles() {
	sidebarContainer.style.display = "block";
	footerContainer.style.display = "block";
	booksContainer.style.display = "block";
	myLibraryButton.style.display = "block";
	stepOne.style.display = "block";
	universalBackButton.style.display = "none";
	bookProfileOne.style.display = "none";
	bookProfileTwo.style.display = "none";
	bookProfileThree.style.display = "none";
	bookProfileFour.style.display = "none";
	bookProfileFive.style.display = "none";
	bookProfileSix.style.display = "none";
	bookProfileSeven.style.display = "none";
	bookProfileEight.style.display = "none";
}

function addBook1() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookOneTitle) {
			borrowStatusOne.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookOneTitle) {
			borrowStatusOne.innerHTML = alreadyAdded;
		} else {
			borrowStatusOne.innerHTML = successfullyAdded;
			selectedBooks.push(bookOneTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusOne.innerHTML = libraryFull;
	}
}
function addBook2() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookTwoTitle) {
			borrowStatusTwo.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookTwoTitle) {
			borrowStatusTwo.innerHTML = alreadyAdded;
		} else {
			borrowStatusTwo.innerHTML = successfullyAdded;
			selectedBooks.push(bookTwoTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusTwo.innerHTML = libraryFull;
	}
}
function addBook3() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookThreeTitle) {
			borrowStatusThree.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookThreeTitle) {
			borrowStatusThree.innerHTML = alreadyAdded;
		} else {
			borrowStatusThree.innerHTML = successfullyAdded;
			selectedBooks.push(bookThreeTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusThree.innerHTML = libraryFull;
	}
}
function addBook4() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookFourTitle) {
			borrowStatusFour.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookFourTitle) {
			borrowStatusFour.innerHTML = alreadyAdded;
		} else {
			borrowStatusFour.innerHTML = successfullyAdded;
			selectedBooks.push(bookFourTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusFour.innerHTML = libraryFull;
	}
}
function addBook5() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookFiveTitle) {
			borrowStatusFive.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookFiveTitle) {
			borrowStatusFive.innerHTML = alreadyAdded;
		} else {
			borrowStatusFive.innerHTML = successfullyAdded;
			selectedBooks.push(bookFiveTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusFive.innerHTML = libraryFull;
	}
}
function addBook6() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookSixTitle) {
			borrowStatusSix.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookSixTitle) {
			borrowStatusSix.innerHTML = alreadyAdded;
		} else {
			borrowStatusSix.innerHTML = successfullyAdded;
			selectedBooks.push(bookSixTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusSix.innerHTML = libraryFull;
	}
}
function addBook7() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookSevenTitle) {
			borrowStatusSeven.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookSevenTitle) {
			borrowStatusSeven.innerHTML = alreadyAdded;
		} else {
			borrowStatusSeven.innerHTML = successfullyAdded;
			selectedBooks.push(bookSevenTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusSeven.innerHTML = libraryFull;
	}
}
function addBook8() {
	if (bookCount < 3) {
		if (selectedBooks[1] == bookEightTitle) {
			borrowStatusEight.innerHTML = alreadyAdded;
		} else if (selectedBooks[2] == bookEightTitle) {
			borrowStatusEight.innerHTML = alreadyAdded;
		} else {
			borrowStatusEight.innerHTML = successfullyAdded;
			selectedBooks.push(bookEightTitle);
			bookCount = selectedBooks.length - 1;
			selectedBookCountDisplay.innerHTML = bookCount;
			myLibraryBooksDisplay.innerHTML = selectedBooks.join(" <br /> ");
		}
	} else {
		borrowStatusEight.innerHTML = libraryFull;
	}
}

function catAll() {
	sci1.style.display = "inline-block";
	sci2.style.display = "inline-block";
	env1.style.display = "inline-block";
	env2.style.display = "inline-block";
	his1.style.display = "inline-block";
	his2.style.display = "inline-block";
	pys1.style.display = "inline-block";
	pys2.style.display = "inline-block";
}
function catSci() {
	sci1.style.display = "inline-block";
	sci2.style.display = "inline-block";
	env1.style.display = "none";
	env2.style.display = "none";
	his1.style.display = "none";
	his2.style.display = "none";
	pys1.style.display = "none";
	pys2.style.display = "none";
}
function catEnv() {
	sci1.style.display = "none";
	sci2.style.display = "none";
	env1.style.display = "inline-block";
	env2.style.display = "inline-block";
	his1.style.display = "none";
	his2.style.display = "none";
	pys1.style.display = "none";
	pys2.style.display = "none";
}
function catHis() {
	sci1.style.display = "none";
	sci2.style.display = "none";
	env1.style.display = "none";
	env2.style.display = "none";
	his1.style.display = "inline-block";
	his2.style.display = "inline-block";
	pys1.style.display = "none";
	pys2.style.display = "none";
}
function catPys() {
	sci1.style.display = "none";
	sci2.style.display = "none";
	env1.style.display = "none";
	env2.style.display = "none";
	his1.style.display = "none";
	his2.style.display = "none";
	pys1.style.display = "inline-block";
	pys2.style.display = "inline-block";
}

function createBorrowAccount() {
	var surname = document.getElementById("surname").value;
	var firstname = document.getElementById("firstname").value;
	var idnumber = document.getElementById("id-num").value;
	var booleanSn = Boolean(surname);
	var booleanFn = Boolean(firstname);
	var booleanId = Boolean(idnumber);
	var date = new Date();
	var currentDay = date.getDate();
	var currentMonth = date.getMonth();
	var currentYear = date.getFullYear();
	if (booleanSn == true && booleanFn == true && booleanId == true) {
		if (Boolean(localStorage.getItem("idnumber")) == false) {
			localStorage.setItem("surname", surname);
			localStorage.setItem("firstname", firstname);
			localStorage.setItem("idnumber", idnumber);
			localStorage.setItem("currentDay", currentDay);
			localStorage.setItem("currentMonth", currentMonth);
			localStorage.setItem("currentYear", currentYear);
			if (bookCount == 1) {
				localStorage.setItem("bookone", selectedBooks[1]);
				var returnDate = date.setDate(date.getDate() + 30);
				var returnDay = date.getDate();
				var returnMonth = date.getMonth();
				var returnYear = date.getFullYear();
				localStorage.setItem("returnDay", returnDay);
				localStorage.setItem("returnDate", returnDate);
				localStorage.setItem("returnMonth", returnMonth);
				localStorage.setItem("returnYear", returnYear);
			} else if (bookCount == 2) {
				localStorage.setItem("bookone", selectedBooks[1]);
				localStorage.setItem("booktwo", selectedBooks[2]);
				var returnDate = date.setDate(date.getDate() + 60);
				var returnDay = date.getDate();
				var returnMonth = date.getMonth();
				var returnYear = date.getFullYear();
				localStorage.setItem("returnDay", returnDay);
				localStorage.setItem("returnDate", returnDate);
				localStorage.setItem("returnMonth", returnMonth);
				localStorage.setItem("returnYear", returnYear);
			} else {
				localStorage.setItem("bookone", selectedBooks[1]);
				localStorage.setItem("booktwo", selectedBooks[2]);
				localStorage.setItem("bookthree", selectedBooks[3]);
				var returnDate = date.setDate(date.getDate() + 90);
				var returnDay = date.getDate();
				var returnMonth = date.getMonth();
				var returnYear = date.getFullYear();
				localStorage.setItem("returnDay", returnDay);
				localStorage.setItem("returnDate", returnDate);
				localStorage.setItem("returnMonth", returnMonth);
				localStorage.setItem("returnYear", returnYear);
			}
			window.alert(accountCreated);
		} else if (localStorage.getItem("surname") == surname && localStorage.getItem("firstname") == firstname && localStorage.getItem("idnumber") == idnumber) {
			window.alert(accountExists);
		} else {
			window.alert(accountFull);
		}
	} else {
		window.alert(inputError);
	}
}

function showOptionReturnBook1() {
	var confirmReturnOne = confirm("Are you sure to return this book?");
	if (confirmReturnOne == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookOneTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-1").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookOneTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-1").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookOneTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-1").style.display = "none";
		}
	}
}
function showOptionReturnBook2() {
	var confirmReturnTwo = confirm("Are you sure to return this book?");
	if (confirmReturnTwo == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookTwoTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-2").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookTwoTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-2").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookTwoTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-2").style.display = "none";
		}
	}
}
function showOptionReturnBook3() {
	var confirmReturnThree = confirm("Are you sure to return this book?");
	if (confirmReturnThree == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookThreeTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-3").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookThreeTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-3").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookThreeTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-3").style.display = "none";
		}
	}
}
function showOptionReturnBook4() {
	var confirmReturnFour = confirm("Are you sure to return this book?");
	if (confirmReturnFour == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookFourTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-4").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookFourTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-4").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookFourTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-4").style.display = "none";
		}
	}
}
function showOptionReturnBook5() {
	var confirmReturnFive = confirm("Are you sure to return this book?");
	if (confirmReturnFive == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookFiveTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-5").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookFiveTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-5").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookFiveTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-5").style.display = "none";
		}
	}
}
function showOptionReturnBook6() {
	var confirmReturnSix = confirm("Are you sure to return this book?");
	if (confirmReturnSix == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookSixTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-6").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookSixTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-6").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookSixTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-6").style.display = "none";
		}
	}
}
function showOptionReturnBook7() {
	var confirmReturnSeven = confirm("Are you sure to return this book?");
	if (confirmReturnSeven == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookSevenTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-7").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookSevenTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-7").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookSevenTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-7").style.display = "none";
		}
	}
}
function showOptionReturnBook8() {
	var confirmReturnEight = confirm("Are you sure to return this book?");
	if (confirmReturnEight == true) {
		if (localStorage.getItem("returnDate") >= dateToday) {
			window.alert("Book has been successfully returned." + " " + "Thank you!");
		} else {
			var rd1 = new Date();
			var rd2 = new Date();
			var rd3 = new Date();
			var rd4 = new Date();
			var rd5 = new Date();
			var rd6 = new Date();
			var rd7 = new Date();
			var lsrd = localStorage.getItem("returnDate");
			var srdo1 = rd1.setTime(lsrd);
			var srdo2 = rd2.setTime(lsrd);
			var srdo3 = rd3.setTime(lsrd);
			var srdo4 = rd4.setTime(lsrd);
			var srdo5 = rd5.setTime(lsrd);
			var srdo6 = rd6.setTime(lsrd);
			var srdo7 = rd7.setTime(lsrd);
			var rdsd1 = rd1.setDate(rd1.getDate() + 7);
			var rdsd1 = rd2.setDate(rd2.getDate() + 14);
			var rdsd1 = rd3.setDate(rd3.getDate() + 21);
			var rdsd1 = rd4.setDate(rd4.getDate() + 28);
			var rdsd1 = rd5.setDate(rd5.getDate() + 35);
			var rdsd1 = rd6.setDate(rd6.getDate() + 42);
			var rdsd1 = rd7.setDate(rd7.getDate() + 49);
			if (rd1 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "20Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd2 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "40Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd3 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "60Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd4 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "80Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd5 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "100Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd6 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "120Php" + " " + "charge fees." + " " + "Thank you!");
			} else if (rd7 >= dateToday) {
				window.alert("Book has been successfully returned." + " " + "You have" + " " + "140Php" + " " + "charge fees." + " " + "Thank you!");
			}
		}
		if (localStorage.getItem("bookone") == bookEightTitle) {
			localStorage.removeItem("bookone");
			document.getElementById("profile-panel-borrowed-bookone").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-8").style.display = "none";
		} else if (localStorage.getItem("booktwo") == bookEightTitle) {
			localStorage.removeItem("booktwo");
			document.getElementById("profile-panel-borrowed-booktwo").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-8").style.display = "none";
		} else if (localStorage.getItem("bookthree") == bookEightTitle) {
			localStorage.removeItem("bookthree");
			document.getElementById("profile-panel-borrowed-bookthree").innerHTML = "(Returned Book)";
			document.getElementById("book-to-return-id-8").style.display = "none";
		}
	}
}

function deleteAccount() {
	if (Boolean(localStorage.getItem("bookone")) == true || Boolean(localStorage.getItem("booktwo")) == true || Boolean(localStorage.getItem("bookthree")) == true) {
		window.alert("Sorry, you have to return all books first before you delete this borrower account.");
	} else {
		var deleteConfirmation = confirm("Are you sure you want to delete this borrower account?");
		if (deleteConfirmation == true) {
			localStorage.removeItem("surname");
			localStorage.removeItem("firstname");
			localStorage.removeItem("idnumber");
			localStorage.removeItem("currentDay");
			localStorage.removeItem("currentMonth");
			localStorage.removeItem("currentYear");
			localStorage.removeItem("returnDay");
			localStorage.removeItem("returnDate");
			localStorage.removeItem("returnMonth");
			localStorage.removeItem("returnYear");
			window.alert("Please refresh the browser to complete the process.");
		}
	}
}