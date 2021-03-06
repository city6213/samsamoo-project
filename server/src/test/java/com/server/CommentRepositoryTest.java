package com.server;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.server.domain.Board;
import com.server.domain.Comment;
import com.server.domain.Reply;
import com.server.persistence.BoardRepository;
import com.server.persistence.CommentRepository;
import com.server.persistence.MemberRepository;
import com.server.persistence.ReplyRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentRepositoryTest {

	@Autowired
	MemberRepository memberRepo;

	@Autowired
	BoardRepository boardRepo;

	@Autowired
	CommentRepository commentRepo;

	@Autowired
	ReplyRepository replyRepo;

	@Test
	public void joinTest() {
		/*
		 * Member findMember = memberRepo.findById("city6213").get(); Board findBoard =
		 * boardRepo.findById(1L).get();
		 * 
		 * System.out.println(findMember.toString());
		 * System.out.println(findBoard.toString()); Comment comment = new Comment();
		 * comment.setComment("몇시쯤 모이나요?"); comment.setMember(findMember);
		 * comment.setBoard(findBoard); commentRepo.save(comment);
		 * 
		 * Reply reply = new Reply(); reply.setReplyComment("3시쯤 모입니다");
		 * reply.setComment(comment); reply.setMember(findMember);
		 * replyRepo.save(reply);
		 */
		// List<Board> boardList = boardRepo.getBoardWithCommentAndReply(1l);
		Board board = boardRepo.getBoardWithCommentAndReply(1L);
		/*
		 * for(Board b : boardList) { System.out.println(boardList.size());
		 * System.out.println(b.toString()); for(Comment c : b.getCommentList()) {
		 * System.out.println(b.getCommentList().size());
		 * System.out.println(c.toString());
		 * 
		 * for(Reply r : c.getReplyList()) {
		 * System.out.println(c.getReplyList().size());
		 * System.out.println(r.toString()); }
		 * 
		 * System.out.println(
		 * "============================================================================"
		 * ); }
		 */
		System.out.println(board.toString());
		for(Comment c : board.getCommentList()) {
			System.out.println(c.toString());
			
			for(Reply r : c.getReplyList()) {
				System.out.println(r.toString());
			}
		}
	}
	/*
	 * map.put("board", (Board) o[0]); map.put("comment", (Comment) o[1]);
	 * map.put("reply", (Reply) o[2]);
	 * 
	 * System.out.println(((Board) map.get("board")).getContent());
	 * System.out.println(((Comment) map.get("comment")).getComment());
	 * System.out.println(((Reply) map.get("reply")).getReplyComment());
	 */

}
