'use strict';

describe('Frame', function(){
  var frame

  beforeEach(function(){
  frame = new Frame();
  });

  it('starts with no rolls by default', function(){
    expect(frame.rolls).toEqual([]);
  });

  describe('adding rolls', function(){
    it('can add a roll to a frame', function(){
      frame.addRoll(3)
      expect(frame.rolls).toEqual([3]);
    });

    it('can add a second roll to a frame', function(){
      frame.addRoll(4);
      frame.addRoll(5);
      expect(frame.rolls).toEqual([4,5]);
    });

    it('does not add more than 2 rolls to a frame', function(){
      frame.addRoll(4);
      frame.addRoll(5);
      expect(function(){frame.addRoll(3)}).toThrowError('This frame already contains two rolls');
      expect(frame.rolls).toEqual([4,5])
    });
  });

  describe('total score', function(){
    it('returns total score of current frame', function(){
      frame.addRoll(3);
      expect(frame.totalScore()).toEqual(3);
    });

    it('returns total score of current frame', function(){
      frame.addRoll(5);
      frame.addRoll(2);
      expect(frame.totalScore()).toEqual(7);
    });
  });

  // describe('is a spare', function(){
  //   it('returns true if this frame is a spare', function(){
  //     frame.addRoll(3);
  //     frame.addRoll(7);
  //     expect(frame.isASpare).toBe(true)
  //   });
  // });
});