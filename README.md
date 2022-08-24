# Devil's Seeds
- Devil's Seeds is a simple horror characters based memory game, to train your reflex and sharpen your mind.
## **Wireframe**
- First idea of a project created in  Balsamiq Wireframes:
![Balsamiq](https://user-images.githubusercontent.com/106401395/185756405-60494be9-9213-4fa5-98e7-04db082efc9d.jpg)
## **Features**

### Header
- Gives user information about game name, short welcoming, game description and how to play to win.
![Header](https://user-images.githubusercontent.com/106401395/185756682-0f59d844-0e3f-4e87-9e36-bfd74e536517.jpg)
### Game area
- The user is provided with 18 black squares that are supposed to play the role as playing cards turned upside down. The images that are hiding "behind" the cards are of 9 different images where every image has an identical twin, that the user is supposed to find. When the user hovers over a card it will react with getting a little bigger. This gives the user direct information about the possibility to click the cards.
![game-area](https://user-images.githubusercontent.com/106401395/185757012-ea678cbf-e1bd-47c4-8f85-095401e5e7b5.jpg)
- When the user click a card it will show an image in colour, then he is expected to click another one. When two cards are shown it will stay coloured for a while. If they are the same image, they will get a grayscale filter and stay opened. If they don’t match, they will turn black again. After the cards turned back to black or got a grayscale filter, the game continues.
![game-played](https://user-images.githubusercontent.com/106401395/185757301-9cd67100-b935-448e-b7ff-1954f037bfc3.jpg)
### Score area
- Located at the bottom af the page. Every time the user has turned 2 cards it will count as a "move". The amount of moves you have made will be shown as "moves" and when you finish the game the "record" will show you the lowest amount of moves you have made to finish the game.
- Also contain "Let's play a game button" to start a new game shuffling all cards and turns them upside down.
![score-area](https://user-images.githubusercontent.com/106401395/185797367-447f8487-0c69-4df6-9d5b-adc507d7ea31.jpg)
### Pop-up winning messages
- When all pairs are found, pop-up message will appear. It's inform user that he win and how many moves through the game he made.
![you-win](https://user-images.githubusercontent.com/106401395/185797651-19dce982-720f-4c5f-8812-18b0a3780b23.jpg)
- If the number of moves is less then the current record, the user will be provided with information about the new achieve record. 
![best-score](https://user-images.githubusercontent.com/106401395/185797720-dc01f16f-8e83-4686-b213-bab1df8bfd72.jpg)
## **Testing**
### Responsiveness
  - These page was tested witch Chrome Developer Tools for a range of devices and I confirm that is responsive for most common screen sizes.
   ![AmIResponsive](https://user-images.githubusercontent.com/106401395/185796345-fc53528f-1755-48fb-98c2-2ed5381ebc75.jpg)
   - iPadMini:
   ![iPadMini](https://user-images.githubusercontent.com/106401395/185796420-b54839c8-2fbb-430b-87e5-40d5b03f86f4.jpg)
   - iPhone 12 Pro:
   ![iPhone12pro](https://user-images.githubusercontent.com/106401395/185796450-0d0d2a7c-7c44-4e92-9e24-3825042573f2.jpg)
### Browser compatibility
  - Page was tested on two browsers Chrome and Edge and in both cases intended apperance and responsiveness was achieved.
### Bugs
- During running the Debug following issue was found:
  - In all three files: index.html, Css and script.js shows syntax error in first line even if there isn't any. Bug not fixed.
![Debbuging](https://user-images.githubusercontent.com/106401395/185798318-7579b8a6-4993-40d8-b16e-c3ccbbbd5cde.jpg)
### Lighthouse
- Lighthouse report:
  - Issues with: Displays images with incorrect aspect ratio in Best Practice area
![Lighthouse](https://user-images.githubusercontent.com/106401395/185798456-6cd141a8-10ed-427a-bd6e-2e4e8eef2d4d.jpg)
### Code validation
 - Validator response of CSS using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 ![W3C CSS checker](https://user-images.githubusercontent.com/106401395/185798746-7537d4f1-c0df-46eb-a3fc-8d22a7b6b98e.jpg)
 
 - Validator response of HTML using [W3 Validator](https://validator.w3.org/)
 ![W3C HTML checker](https://user-images.githubusercontent.com/106401395/185798873-8c481dd3-f403-4226-92a3-703e33c2b517.jpg)
 
 - Validator response of JavaScript using [JSHint](https://jshint.com/)
   - After first testing the following issue was found: "'let' is avaible in ES6 (use'esversion:6') or Mozilla JS extension" in several places. Problem was fixed with help of [R3HAB MEDIA profile on YouTube](https://www.bing.com/videos/search?q=let+is+available+in+es6&view=detail&mid=8FEDAD0E1A7AE3E9C8EA8FEDAD0E1A7AE3E9C8EA&FORM=VIRE). Picture shows validator after fixing issue.
   ![JsHint](https://user-images.githubusercontent.com/106401395/185799293-4df47412-f361-48cf-bd94-96b0a8d57a81.jpg)
## **Deployment**
- The site was deployed to GitHub in following steps:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select Master Branch
  - Once the Master Branch has been selected, the page provided the link to the complite website.

The link can be founde here: <a href="https://marta10111.github.io/JS-Second-Project/" rel="nofollow"> https://marta10111.github.io/JS-Second-Project/
## **Content**
 - For idea how to start the project I use [Samuraj Programowania]((https://www.youtube.com/watch?v=gKUUHjEg7mQ&ab_channel=SamurajProgramowania)
 channel on You Tube

 - I used fonts from [Google Fonts](https://fonts.google.com/) for these project.
 -  Any code or problem solving issues was solved with the help of [Code Institute](https://learn.codeinstitute.net/login?next=/) and [w3school](https://www.w3schools.com/)
  - For issue fixing i was using YouTube search on R3HAB MEDIA and Kevin Powell channels.
  - Feedback and comments from reviever of my PP1 were taken into account for these project, when running tests and commiting into GitHub. Per their suggestion I was trying to write some more specific comments messages.
  -  Colleagues from Slack was also very helpfull, despite i didn't ask any question
there, I finde a few felpfull topics and channells.
 - I would also want to thank my mentor Martina, who have a huge amount of patience and knowledge she want to share.
## **Media**
- All images was from Google finds just for educational purposes:
  - [Freddy Krueger](https://villains.fandom.com/wiki/Freddy_Krueger_(original))
  - [Chucky](https://en.wikipedia.org/wiki/Chucky_%28character%29)
  - [Norman Bates](https://halloweenhorrornights.fandom.com/wiki/Norman_Bates)
  - [Annie Wilkes](https://www.whatsleepsbeneath.com/movieblog/women-in-horror-annie-wilkes)
  - [Michael Myers](https://en.wikipedia.org/wiki/Michael_Myers_%28Halloween%29)
  - [Jack Torrance](https://en.wikipedia.org/wiki/Jack_Torrance)
  - [Hannibal Lecter](https://en.wikipedia.org/wiki/Hannibal_Lecter)
  - [Jason Voorhees](https://en.wikipedia.org/wiki/Jason_Voorhees)
  - [Misery](https://www.looper.com/251702/the-untold-truth-of-misery/)
  - [Bloody paper](https://depositphotos.com/108604478/stock-photo-old-paper-background-with-blood.html) background image
- Instructions on how to upload images to README.md file was taken for educational purpose only from <a href="https://www.youtube.com/watch?v=nvPOUdz5PL4&t=146s&ab_channel=DanShahin>" rel="nofollow"> Specific YouTube Tutorial</a>





