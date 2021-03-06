package com.server.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.server.domain.Member;
import com.server.dto.member.AfterUpdateMemberDTO;
import com.server.dto.member.MemberLoginDTO;
import com.server.dto.member.UpdateMemberDTO;


public interface MemberService {

	public Member getMember(String id);

	public Member signup(Member member);

	public Member updateProfileMember(String id, MultipartFile file, UpdateMemberDTO dto)throws IOException;
	
	public Member updateMember(String id,MultipartFile file,AfterUpdateMemberDTO dto) throws IOException;
	
	public Member signin(MemberLoginDTO dto);
	
	public void deleteMember(String id);
	
	
}
