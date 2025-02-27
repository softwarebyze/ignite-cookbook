---
title: Sample YAML for CircleCi for Ignite
description: A Copy/Paste Sample YAML for your Ignite Project
tags:
  - CI/CD
  - Guide
last_update:
  author: Robin Heinze
publish_date: 2022-10-09
---

### Sampl YAML File

```yaml
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#

defaults: &defaults
  docker:
    # Choose the version of Node you want here
    - image: circleci/node:10.11
  working_directory: ~/repo

version: 2
jobs:
  setup:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          name: Restore node modules
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            # fallback to using the latest cache if no exact match is found
            - v1-dependencies-
      - run:
          name: Install dependencies
          command: |
            yarn install
      - save_cache:
          name: Save node modules
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

  tests:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          name: Restore node modules
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            # fallback to using the latest cache if no exact match is found
            - v1-dependencies-
      - run:
          name: Install React Native CLI and Ignite CLI
          command: |
            sudo npm i -g ignite-cli react-native-cli
      - run:
          name: Run tests
          command: yarn ci:test # this command will be added to/found in your package.json scripts

  publish:
    <<: *defaults
    steps:
      - checkout
      - run: echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc
      - restore_cache:
          name: Restore node modules
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            # fallback to using the latest cache if no exact match is found
            - v1-dependencies-
      # Run semantic-release after all the above is set.
      - run:
          name: Publish to NPM
          command: yarn ci:publish # this will be added to your package.json scripts

workflows:
  version: 2
  test_and_release:
    jobs:
      - setup
      - tests:
          requires:
            - setup
      - publish:
          requires:
            - tests
          filters:
            branches:
              only: master
```
