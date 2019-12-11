


# Code for Baltimore Website
One home for everything needed to learn or get involved with Baltimore's chapter of Code for America

## Documentation
For more information about this project and how we're building it please see the `docs` folder 
* [Tech Spec](/docs/Tech_Spec.md) 
* [Best Practices](/docs/Best_Practices.md) 
* [Style Guide](/style_guide.html)

## Setup
If you want to build the website locally, fork the `https://github.com/CodeForBaltimore/codeforbaltimore.github.io` repo to your own account and then `git clone` your repo to your local machine. Once it is installed locally you can make any changes in your text editor of choice, `git push` up to Github and [open a pull request.](https://github.com/CodeForBaltimore/codeforbaltimore.github.io/pulls) onto the master branch of our repo.

### Ruby on Windows
To run on Windows you must first have Ruby installed. You can install Ruby using Chocolatey using the command below, or download the [Ruby Installer](https://rubyinstaller.org/).
```
choco install ruby
```
Alternatively you can install Jekyll using the [Linux Subsystem](https://jekyllrb.com/docs/installation/windows/).

### Setup Jekyll
Once Ruby is installed you will need to install Jekyll and bundler
```
gem install jekyll bundler
```
_Note_ you may need to download and install [MSYS2](https://msys2.github.io/).

You can run the site locally by running
```
jekyll serve
```
or
```
bundle exec jekyll serve
```

## Sources and Links
Based on https://github.com/codefordc/codefordc.github.com/pull/217

Created a signed request at https://secure.meetup.com/meetup_api/console/?path=/:urlname/events

Built with [Github Pages](https://pages.github.com/) using Jekyll
