# WORKERS

Basic implementation of a front end made in Angular 2 and bootstrap to deal with workers that can be found geologically and work for you based on tags.
You can find the complementary back-end in [this repository](https://github.com/alvarotor/workers-backend).

Its a basic implementation of a multilanguage system that allows people join and provide with tags what kinda works and what are the skills that they can provide to possible other users that are willing to pay for them.

The users that are willing to pay and need people performing those tasks can find them by geolocation of where they are and their skills. They can see their profiles and contact them by messages that are also being sent by email with sendgrid. Later on they can rate the worker by their performance quality.
The workers can add a profile and skills by tags that users can use to search for them. Also a minimal credit system added in case the website is used with a payment first system way of accessing.

Feel free to test it, use it and provide changes, improvements and pull requests.

## TO MAKE IT WORK

Install all libraries with 'npm install'.

Within the root project folder execute on the terminal 'npm run serve'. 
Remember to have the backend ready running.

If you need the files ready for production type 'npm run build'.
