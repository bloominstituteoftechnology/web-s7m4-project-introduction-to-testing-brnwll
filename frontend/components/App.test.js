import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { en, esp } from '../i18n'
import App from './App'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    test('TEXT elements are visible', () => {
      render(<App lang="en" />)
      getEntriesByKeyPrefix(en, 'TEXT').map(([key, val]) => {
        expect(screen.getByText(val)).toBeVisible()
      })
    })
    test('LABEL elements are visible', () => {
      render(<App lang="en" />)
      getEntriesByKeyPrefix(en, 'LABEL').map(([key, val]) => {
        expect(screen.getByLabelText(val)).toBeVisible()
      })
    })
    test('PLACEHOLDER elements are visible', () => {
      render(<App lang="en" />)
      getEntriesByKeyPrefix(en, 'PLACEHOLDER').map(([key, val]) => {
        expect(screen.getByPlaceholderText(val)).toBeVisible()
      })
    })
  })
  describe('Spanish Language', () => {
    test('TEXT elements are visible', () => {
      render(<App lang="esp" />)
      getEntriesByKeyPrefix(esp, 'TEXT').map(([key, val]) => {
        expect(screen.getByText(val)).toBeVisible()
      })
    })
    test('LABEL elements are visible', () => {
      render(<App lang="esp" />)
      getEntriesByKeyPrefix(esp, 'LABEL').map(([key, val]) => {
        expect(screen.getByLabelText(val)).toBeVisible()
      })
    })
    test('PLACEHOLDER elements are visible', () => {
      render(<App lang="esp" />)
      getEntriesByKeyPrefix(esp, 'PLACEHOLDER').map(([key, val]) => {
        expect(screen.getByPlaceholderText(val)).toBeVisible()
      })
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
