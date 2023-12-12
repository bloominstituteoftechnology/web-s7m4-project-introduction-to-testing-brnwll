import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { en, esp } from '../i18n'
import App from './App'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test('LABEL_USERNAME is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(en.LABEL_USERNAME)).toBeVisible()
    })
    test('PLACEHOLDER_USERNAME is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(en.PLACEHOLDER_USERNAME)).toBeVisible()
    })
    test('TEXT_FAV_LANG is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_FAV_LANG)).toBeVisible()
    })
    test('TEXT_FAV_LANG_JS is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(en.TEXT_FAV_LANG_JS)).toBeVisible()
    })
    test('TEXT_FAV_LANG_RUST is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(en.TEXT_FAV_LANG_RUST)).toBeVisible()
    })
    test('LABEL_FAV_FOOD is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(en.LABEL_FAV_FOOD)).toBeVisible()
    })
    test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
    })
    test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
    })
    test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
    })
    test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
    })
    test('LABEL_ACCEPT_TERMS is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(en.LABEL_ACCEPT_TERMS)).toBeVisible()
    })
    test('TEXT_SUBMIT is visible', () => {
      render(<App lang="en" />)
      expect(screen.getByText(en.TEXT_SUBMIT)).toBeVisible()
    })
  })
  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
      test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
      })
      test('LABEL_USERNAME is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByLabelText(esp.LABEL_USERNAME)).toBeVisible()
      })
      test('PLACEHOLDER_USERNAME is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByPlaceholderText(esp.PLACEHOLDER_USERNAME)).toBeVisible()
      })
      test('TEXT_FAV_LANG is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_FAV_LANG)).toBeVisible()
      })
      test('TEXT_FAV_LANG_JS is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByLabelText(esp.TEXT_FAV_LANG_JS)).toBeVisible()
      })
      test('TEXT_FAV_LANG_RUST is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByLabelText(esp.TEXT_FAV_LANG_RUST)).toBeVisible()
      })
      test('LABEL_FAV_FOOD is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByLabelText(esp.LABEL_FAV_FOOD)).toBeVisible()
      })
      test('TEXT_OPT_FAV_FOOD_1 is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
      })
      test('TEXT_OPT_FAV_FOOD_2 is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
      })
      test('TEXT_OPT_FAV_FOOD_3 is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
      })
      test('TEXT_OPT_FAV_FOOD_4 is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
      })
      test('LABEL_ACCEPT_TERMS is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByLabelText(esp.LABEL_ACCEPT_TERMS)).toBeVisible()
      })
      test('TEXT_SUBMIT is visible', () => {
        render(<App lang="esp" />)
        expect(screen.getByText(esp.TEXT_SUBMIT)).toBeVisible()
      })
  })
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
      const obj = {
        abc_1: "data_abc_1",
        abc_2: "data_abc_2",
        xyz_1: "data_xyz_1",
        abc_3: "data_abc_3",
      }
      expect(getEntriesByKeyPrefix(obj, 'abc')).toEqual([
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"],
      ])
      expect(getEntriesByKeyPrefix(obj, 'xyz')).toEqual([
        ["xyz_1", "data_xyz_1"]
      ])
      expect(getEntriesByKeyPrefix(obj, 'foo')).toEqual([])
    })
  })
})

function getEntriesByKeyPrefix(obj, keyPrefix) {
  const hasPrefix = (str) => keyPrefix === str.split("_").at(0);
  return Object.entries(obj).filter((entry) => hasPrefix(entry[0]));
}
